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

async function drawMeal(ctx, id, config) {
  const value = document.getElementById(id).value
  const meal = gerichte[value]

  if (!meal) {
    throw new Error("Kein Gericht gefunden für: " + value)
  }

  const img = await loadImage(meal.bild)

  ctx.save()
  ctx.beginPath()
  ctx.arc(config.imageX, config.imageY, config.imageRadius, 0, Math.PI * 2)
  ctx.closePath()
  ctx.clip()

  ctx.drawImage(
    img,
    config.imageX - config.imageRadius,
    config.imageY - config.imageRadius,
    config.imageRadius * 2,
    config.imageRadius * 2
  )

  ctx.restore()

  ctx.textAlign = "center"
  ctx.fillStyle = "#2d2d2d"

  ctx.font = "54px Arial"
  drawWrappedText(
    ctx,
    meal.text,
    config.textX,
    config.textY,
    config.textMaxWidth,
    config.textLineHeight
  )

  ctx.font = "52px Arial"
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
    const template = await loadImage("template.jpg")

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(template, 0, 0, 2160, 2700)

    const woche = document.getElementById("woche").value
    ctx.textAlign = "center"
    ctx.fillStyle = "#111"
    ctx.font = "bold 92px Arial"
    ctx.fillText(woche, 1080, 320)

    await drawMeal(ctx, "dienstag", {
      imageX: 640,
      imageY: 890,
      imageRadius: 185,
      textX: 640,
      textY: 1260,
      textMaxWidth: 520,
      textLineHeight: 66,
      priceX: 640,
      priceY: 1550
    })

    await drawMeal(ctx, "mittwoch", {
      imageX: 1505,
      imageY: 890,
      imageRadius: 185,
      textX: 1505,
      textY: 1260,
      textMaxWidth: 520,
      textLineHeight: 66,
      priceX: 1505,
      priceY: 1550
    })

    await drawMeal(ctx, "donnerstag", {
      imageX: 640,
      imageY: 1685,
      imageRadius: 185,
      textX: 640,
      textY: 2060,
      textMaxWidth: 520,
      textLineHeight: 66,
      priceX: 640,
      priceY: 2350
    })

    await drawMeal(ctx, "freitag", {
      imageX: 1505,
      imageY: 1685,
      imageRadius: 185,
      textX: 1505,
      textY: 2060,
      textMaxWidth: 520,
      textLineHeight: 66,
      priceX: 1505,
      priceY: 2350
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
