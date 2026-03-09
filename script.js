const gerichte = {
  schlachtschüssel: {
    bild: "Gerichte/schlachtschüssel.jpg",
    preis: "ab 5,00 €",
    text: "Schlachtschüssel"
  },

  kotelett: {
    bild: "Gerichte/kotelett.jpg",
    preis: "6,80 €",
    text: "Kotelett mit Kartoffelsalat"
  },

  fleischteller: {
    bild: "Gerichte/fleischteller.jpg",
    preis: "€ pro 100g",
    text: "Schnitzel, Bratwürste, Frikadelle und Fleischkäse mit Kartoffelsalat"
  },

  schaeufele: {
    bild: "Gerichte/schaeufele.jpg",
    preis: "8,50 €",
    text: "Schäufele mit Knödel"
  },

  cordonbleu: {
    bild: "Gerichte/cordonbleu.jpg",
    preis: "6,80 €",
    text: "Cordon Bleu mit Kartoffelsalat"
  },

  gyros: {
    bild: "Gerichte/gyros.jpg",
    preis: "6,80 €",
    text: "Gyros mit Krautsalat und Zaziki"
  },

  schweinebraten: {
    bild: "Gerichte/schweinebraten.jpg",
    preis: "8,50 €",
    text: "Schweinebraten mit Knödel"
  },

  schaschlik: {
    bild: "Gerichte/schaschlik.jpg",
    preis: "8,50 €",
    text: "Schaschlik mit Semmel"
  },

  gulasch: {
    bild: "Gerichte/gulasch.jpg",
    preis: "6,80 €",
    text: "Gulasch mit Spätzle"
  },

  rouladen: {
    bild: "Gerichte/rouladen.jpg",
    preis: "8,50 €",
    text: "Rouladen mit Spätzle"
  },

  backfisch: {
    bild: "Gerichte/backfisch.jpg",
    preis: "6,80 €",
    text: "Backfisch mit Kartoffelsalat"
  },

  spaghetti: {
    bild: "Gerichte/spaghetti.jpg",
    preis: "6,80 €",
    text: "Spaghetti Bolognese"
  },

  backschinken: {
    bild: "Gerichte/backschinken.jpg",
    preis: "8,50 €",
    text: "Backschinken mit Kartoffelsalat"
  },

  zwiebelrostbraten: {
    bild: "Gerichte/zwiebelrostbraten.jpg",
    preis: "10,50 €",
    text: "Zwiebelrostbraten mit Spätzle"
  },

  lende: {
    bild: "Gerichte/lende.jpg",
    preis: "8,50 €",
    text: "Lende mit Rahmsauce und Spätzle"
  },

  kuemmelbraten: {
    bild: "Gerichte/kuemmelbraten.jpg",
    preis: "8,50 €",
    text: "Kümmelbraten mit Semmelknödel"
  },

  currywurst: {
    bild: "Gerichte/currywurst.jpg",
    preis: "6,80 €",
    text: "Currywurst mit Semmel"
  },

  hackbraten: {
    bild: "Gerichte/hackbraten.jpg",
    preis: "8,50 €",
    text: "Hackbraten mit Kartoffeln und Gemüse"
  },

  karpfenfilet: {
    bild: "Gerichte/karpfenfilet.jpg",
    preis: "8,50 €",
    text: "Karpfenfilet mit Kartoffelsalat"
  },

  krautwickel: {
    bild: "Gerichte/krautwickel.jpg",
    preis: "8,50 €",
    text: "Krautwickel mit Kartoffeln"
  },

  lasagne: {
    bild: "Gerichte/lasagne.jpg",
    preis: "6,80 €",
    text: "Lasagne"
  },

  rindfleisch_merrettich: {
    bild: "Gerichte/rindfleisch_merrettich.jpg",
    preis: "8,50 €",
    text: "Rindfleisch mit Kartoffelsalat und Meerrettich"
  }
}

const alleGerichteSortiert = Object.entries(gerichte).sort((a, b) =>
  a[1].text.localeCompare(b[1].text, "de")
)

function fuelleDropdown(id, standardWert = "", gefilterteListe = alleGerichteSortiert) {
  const select = document.getElementById(id)
  if (!select) return

  const alterWert = select.value
  select.innerHTML = ""

  gefilterteListe.forEach(([key, gericht]) => {
    const option = document.createElement("option")
    option.value = key
    option.textContent = gericht.text

    if (alterWert && key === alterWert) {
      option.selected = true
    } else if (!alterWert && key === standardWert) {
      option.selected = true
    }

    select.appendChild(option)
  })

  if (select.options.length === 0) {
    const option = document.createElement("option")
    option.value = ""
    option.textContent = "Kein passendes Gericht gefunden"
    select.appendChild(option)
  }
}

function filterDropdown(selectId, searchInputId) {
  const suchtext = document.getElementById(searchInputId).value.trim().toLowerCase()

  const gefilterteListe = alleGerichteSortiert.filter(([key, gericht]) =>
    gericht.text.toLowerCase().includes(suchtext)
  )

  fuelleDropdown(selectId, "", gefilterteListe)
}

function initialisiereDropdowns() {
  fuelleDropdown("dienstag", "currywurst")
  fuelleDropdown("mittwoch", "cordonbleu")
  fuelleDropdown("donnerstag", "gulasch")
  fuelleDropdown("freitag", "lasagne")
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

  ctx.save()
  ctx.beginPath()
  ctx.arc(config.imageX, config.imageY, config.imageRadius, 0, Math.PI * 2)
  ctx.closePath()
  ctx.clip()
  drawImageCover(ctx, img, config.imageX, config.imageY, config.imageRadius)
  ctx.restore()

  ctx.textAlign = "center"
  ctx.fillStyle = "#2f2f2f"
  ctx.font = "500 50px 'Raleway', Arial, sans-serif"

  drawWrappedText(
    ctx,
    meal.text,
    config.textX,
    config.textY,
    config.textMaxWidth,
    config.textLineHeight
  )

  ctx.textAlign = "center"
  ctx.fillStyle = config.priceColor || "#2f2f2f"
  ctx.font = "600 52px 'Raleway', Arial, sans-serif"
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
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready
    }

    const template = await loadImage("template.jpg")

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(template, 0, 0, 2160, 2700)

    const woche = document.getElementById("woche").value

    ctx.textAlign = "center"
    ctx.fillStyle = "#111111"
    ctx.font = "700 90px 'IBM Plex Serif', Georgia, serif"
    ctx.fillText(woche, 1200, 340)

    await drawMeal(ctx, "dienstag", {
      imageX: 610,
      imageY: 930,
      imageRadius: 180,
      textX: 640,
      textY: 1250,
      textMaxWidth: 520,
      textLineHeight: 50,
      priceX: 640,
      priceY: 1560,
      priceColor: "#ffffff"
    })

    await drawMeal(ctx, "mittwoch", {
      imageX: 1535,
      imageY: 930,
      imageRadius: 180,
      textX: 1530,
      textY: 1250,
      textMaxWidth: 520,
      textLineHeight: 50,
      priceX: 1535,
      priceY: 1560,
      priceColor: "#2f2f2f"
    })

    await drawMeal(ctx, "donnerstag", {
      imageX: 610,
      imageY: 1775,
      imageRadius: 180,
      textX: 640,
      textY: 2100,
      textMaxWidth: 520,
      textLineHeight: 50,
      priceX: 640,
      priceY: 2360,
      priceColor: "#2f2f2f"
    })

    await drawMeal(ctx, "freitag", {
      imageX: 1530,
      imageY: 1775,
      imageRadius: 180,
      textX: 1540,
      textY: 2100,
      textMaxWidth: 520,
      textLineHeight: 48,
      priceX: 1535,
      priceY: 2360,
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

window.addEventListener("DOMContentLoaded", () => {
  initialisiereDropdowns()
})