const gerichte = {
  currywurst: {
    bild: "Gerichte/currywurst.jpg",
    preis: "7,50 €",
    text: "Currywurst mit Semmel"
  },
  cordonbleu: {
    bild: "Gerichte/cordonbleu.jpg",
    preis: "8,50 €",
    text: "Cordon Bleu mit Kartoffelsalat"
  },
  gulasch: {
    bild: "Gerichte/gulasch.jpg",
    preis: "8,90 €",
    text: "Gulasch mit Spätzle"
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error("Bild konnte nicht geladen werden: " + src))
    img.src = src
  })
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ")
  let line = ""
  const lines = []

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " "
    const testWidth = ctx.measureText(testLine).width

    if (testWidth > maxWidth && i > 0) {
      lines.push(line.trim())
      line = words[i] + " "
    } else {
      line = testLine
    }
  }

  lines.push(line.trim())

  lines.forEach((entry, index) => {
    ctx.fillText(entry, x, y + index * lineHeight)
  })
}

function drawImageCover(ctx, img, cx, cy, radius) {
  const diameter = radius * 2
  const imgRatio = img.width / img.height

  let drawWidth
  let drawHeight

  if (imgRatio > 1) {
    drawHeight = diameter
    drawWidth = diameter * imgRatio
  } else {
    drawWidth = diameter
    drawHeight = diameter / imgRatio
  }

  const dx = cx - drawWidth / 2
  const dy = cy - drawHeight / 2

  ctx.drawImage(img, dx, dy, drawWidth, drawHeight)
}

async function drawMeal(ctx, id, config) {
  const value = document.getElementById(id).value
  const meal = gerichte[value]

  if (!meal) {
    throw new Error("Kein Gericht gefunden für: " + value)
  }

  const img = await loadImage(meal.bild)

  // Rundes Bild ohne Verzerrung
  ctx.save()
  ctx.beginPath()
  ctx.arc(config.imageX, config.imageY, config.imageRadius, 0, Math.PI * 2)
  ctx.closePath()
  ctx.clip()
  drawImageCover(ctx, img, config.imageX, config.imageY, config.imageRadius)
  ctx.restore()

  // Gerichttext
  ctx.textAlign = "center"
  ctx.fillStyle = "#2f2f2f"
  ctx.font = "500 38px 'Raleway', Arial, sans-serif"

  drawWrappedText(
    ctx,
    meal.text,
    config.textX,
    config.textY,
    config.textMaxWidth,
    config.textLineHeight
  )

  // Preis
  ctx.textAlign = "center"
  ctx.fillStyle = config.priceColor || "#2f2f2f"
  ctx.font = "600 48px 'Raleway', Arial, sans-serif"
  ctx.fillText(meal.preis, config.priceX, config.priceY)
}

async function generate() {
  const status = document.getElementById("status")
  const link = document.getElementById("download")
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")

  status.textContent = "Bild wird erstellt ..."
  link.textContent = ""
  link.removeAttribute("href")

  try {
    // wichtig: warten bis Fonts geladen sind
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready
    }

    const template = await loadImage("template.jpg")

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(template, 0, 0, 2160, 2700)

    const woche = document.getElementById("woche").value

    // Datum / Woche
    ctx.textAlign = "center"
    ctx.fillStyle = "#111111"
    ctx.font = "700 82px 'IBM Plex Serif', Georgia, serif"
    ctx.fillText(woche, 1125, 340)

    // Dienstag
    await drawMeal(ctx, "dienstag", {
      imageX: 610,
      imageY: 930,
      imageRadius: 178,

      textX: 640,
      textY: 1395,
      textMaxWidth: 470,
      textLineHeight: 50,

      priceX: 640,
      priceY: 1590,
      priceColor: "#ffffff"
    })

    // Mittwoch
    await drawMeal(ctx, "mittwoch", {
      imageX: 1535,
      imageY: 930,
      imageRadius: 178,

      textX: 1505,
      textY: 1395,
      textMaxWidth: 470,
      textLineHeight: 50,

      priceX: 1530,
      priceY: 1555,
      priceColor: "#2f2f2f"
    })

    // Donnerstag
    await drawMeal(ctx, "donnerstag", {
      imageX: 610,
      imageY: 1845,
      imageRadius: 178,

      textX: 640,
      textY: 2290,
      textMaxWidth: 470,
      textLineHeight: 50,

      priceX: 640,
      priceY: 2450,
      priceColor: "#2f2f2f"
    })

    // Freitag
    await drawMeal(ctx, "freitag", {
      imageX: 1530,
      imageY: 1845,
      imageRadius: 178,

      textX: 1505,
      textY: 2225,
      textMaxWidth: 520,
      textLineHeight: 48,

      priceX: 1505,
      priceY: 2450,
      priceColor: "#ffffff"
    })

    link.href = canvas.toDataURL("image/png")
    link.download = "mittagstisch.png"
    link.textContent = "Bild herunterladen"
    status.textContent = "Fertig"
  } catch (error) {
    console.error(error)
    status.textContent = "Fehler: " + error.message
  }
}
