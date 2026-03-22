const standardGerichte = {
  schlachtschuessel: { bild: "Gerichte/schlachtschuessel.jpg", preis: "ab 5,00 €", text: "Schlachtschüssel" },
  kotelett: { bild: "Gerichte/kotelett.jpg", preis: "6,80 €", text: "Kotelett mit Kartoffelsalat" },
  fleischteller: { bild: "Gerichte/fleischteller.jpg", preis: "€ pro 100g", text: "Schnitzel, Bratwürste, Frikadelle und Fleischkäse mit Kartoffelsalat" },
  schaeufele: { bild: "Gerichte/schaeufele.jpg", preis: "8,50 €", text: "Schäufele mit Knödel" },
  cordonbleu: { bild: "Gerichte/cordonbleu.jpg", preis: "6,80 €", text: "Cordon Bleu mit Kartoffelsalat" },
  gyros: { bild: "Gerichte/gyros.jpg", preis: "6,80 €", text: "Gyros mit Krautsalat und Zaziki" },
  schweinebraten: { bild: "Gerichte/schweinebraten.jpg", preis: "8,50 €", text: "Schweinebraten mit Knödel" },
  schaschlik: { bild: "Gerichte/schaschlik.jpg", preis: "8,50 €", text: "Schaschlik mit Semmel" },
  gulasch: { bild: "Gerichte/gulasch.jpg", preis: "6,80 €", text: "Gulasch mit Spätzle" },
  rouladen: { bild: "Gerichte/rouladen.jpg", preis: "8,50 €", text: "Rouladen mit Spätzle" },
  backfisch: { bild: "Gerichte/backfisch.jpg", preis: "6,80 €", text: "Backfisch mit Kartoffelsalat" },
  spaghetti: { bild: "Gerichte/spaghetti.jpg", preis: "6,80 €", text: "Spaghetti Bolognese" },
  backschinken: { bild: "Gerichte/backschinken.jpg", preis: "8,50 €", text: "Backschinken mit Kartoffelsalat" },
  zwiebelrostbraten: { bild: "Gerichte/zwiebelrostbraten.jpg", preis: "10,50 €", text: "Zwiebelrostbraten mit Spätzle" },
  lende: { bild: "Gerichte/lende.jpg", preis: "8,50 €", text: "Lende mit Rahmsauce und Spätzle" },
  kuemmelbraten: { bild: "Gerichte/kuemmelbraten.jpg", preis: "8,50 €", text: "Kümmelbraten mit Semmelknödel" },
  currywurst: { bild: "Gerichte/currywurst.jpg", preis: "6,80 €", text: "Currywurst mit Semmel" },
  hackbraten: { bild: "Gerichte/hackbraten.jpg", preis: "8,50 €", text: "Hackbraten mit Kartoffeln und Gemüse" },
  karpfenfilet: { bild: "Gerichte/karpfenfilet.jpg", preis: "8,50 €", text: "Karpfenfilet mit Kartoffelsalat" },
  krautwickel: { bild: "Gerichte/krautwickel.jpg", preis: "8,50 €", text: "Krautwickel mit Kartoffeln" },
  lasagne: { bild: "Gerichte/lasagne.jpg", preis: "6,80 €", text: "Lasagne" },
  rindfleisch_meerrettich: { bild: "Gerichte/rindfleisch_meerrettich.jpg", preis: "8,50 €", text: "Rindfleisch mit Kartoffelsalat und Meerrettich" }
}



const basisLayoutKlassisch = {
  feed: {
    woche: { x: 1200, y: 340, fontSize: 90 },
    meals: {
      dienstag: {
        imageX: 610, imageY: 930, imageRadius: 180,
        textX: 640, textY: 1266, textMaxWidth: 520, textLineHeight: 50,
        priceX: 640, priceY: 1560, priceColor: "#ffffff",
        textFontSize: 50, priceFontSize: 52
      },
      mittwoch: {
        imageX: 1535, imageY: 930, imageRadius: 180,
        textX: 1530, textY: 1265, textMaxWidth: 520, textLineHeight: 50,
        priceX: 1535, priceY: 1560, priceColor: "#2f2f2f",
        textFontSize: 50, priceFontSize: 52
      },
      donnerstag: {
        imageX: 610, imageY: 1775, imageRadius: 180,
        textX: 640, textY: 2125, textMaxWidth: 520, textLineHeight: 50,
        priceX: 640, priceY: 2360, priceColor: "#2f2f2f",
        textFontSize: 50, priceFontSize: 52
      },
      freitag: {
        imageX: 1530, imageY: 1775, imageRadius: 180,
        textX: 1540, textY: 2125, textMaxWidth: 520, textLineHeight: 48,
        priceX: 1535, priceY: 2360, priceColor: "#ffffff",
        textFontSize: 50, priceFontSize: 52
      }
    }
  },

  story: {
    woche: { x: 540, y: 355, fontSize: 38 },
    meals: {
      dienstag: {
        imageX: 270, imageY: 755, imageRadius: 120,
        textX: 270, textY: 845, textMaxWidth: 240, textLineHeight: 30,
        priceX: 270, priceY: 965, priceColor: "#ffffff",
        textFontSize: 22, priceFontSize: 24
      },
      mittwoch: {
        imageX: 810, imageY: 755, imageRadius: 120,
        textX: 810, textY: 845, textMaxWidth: 240, textLineHeight: 30,
        priceX: 810, priceY: 965, priceColor: "#2f2f2f",
        textFontSize: 22, priceFontSize: 24
      },
      donnerstag: {
        imageX: 270, imageY: 1265, imageRadius: 120,
        textX: 270, textY: 1355, textMaxWidth: 240, textLineHeight: 30,
        priceX: 270, priceY: 1475, priceColor: "#2f2f2f",
        textFontSize: 22, priceFontSize: 24
      },
      freitag: {
        imageX: 810, imageY: 1265, imageRadius: 120,
        textX: 810, textY: 1355, textMaxWidth: 240, textLineHeight: 30,
        priceX: 810, priceY: 1475, priceColor: "#ffffff",
        textFontSize: 22, priceFontSize: 24
      }
    }
  }
}



function getAktuellerKunde() {
  const select = document.getElementById("kunde")
  if (!select) return localStorage.getItem("aktuellerKunde") || "sorgundseitz"
  return select.value || "sorgundseitz"
}

function setAktuellerKunde(kunde) {
  localStorage.setItem("aktuellerKunde", kunde)
}

function getStorageKey(baseKey) {
  return `${baseKey}_${getAktuellerKunde()}`
}

function safeParseStorage(key, fallback) {
  const gespeichert = localStorage.getItem(key)

  if (!gespeichert || gespeichert === "undefined" || gespeichert === "null") {
    return fallback
  }

  try {
    return JSON.parse(gespeichert)
  } catch (error) {
    console.warn(`localStorage Eintrag "${key}" ist kaputt:`, gespeichert)
    return fallback
  }
}

function getGerichte() {
  return safeParseStorage(getStorageKey("gerichte"), structuredClone(standardGerichte))
}

function updateFormatAuswahl() {
  const layout = document.getElementById("layout-auswahl")?.value
  const formatSelect = document.getElementById("format-auswahl")

  if (!layout || !formatSelect) return

  formatSelect.innerHTML = ""

  if (layout === "mittagstisch_instagram") {
    formatSelect.innerHTML = `
      <option value="feed">Feed</option>
      <option value="story">Story</option>
    `
  }

  if (layout === "mittagstisch_druck") {
    formatSelect.innerHTML = `
      <option value="front">Vorderseite</option>
      <option value="back">Rückseite</option>
    `
  }
}

function getLayoutOverrides() {
  return safeParseStorage(getStorageKey("layoutOverrides"), {})
}

function saveLayoutOverrides(data) {
  localStorage.setItem(getStorageKey("layoutOverrides"), JSON.stringify(data))
}

function updateAdminEditorUI() {
  const format = document.getElementById("format-auswahl")?.value

  const bereichWrap = document.getElementById("bereich-wrap")
  const tagWrap = document.getElementById("tag-wrap")
  const mealFieldsWrap = document.getElementById("meal-fields-wrap")
  const weekFieldsWrap = document.getElementById("week-fields-wrap")

  const istInstagram = format === "feed" || format === "story"
  const istFront = format === "front"
  const istBack = format === "back"

  if (bereichWrap) {
    bereichWrap.style.display = istBack ? "block" : "none"
  }

  if (tagWrap) {
    tagWrap.style.display = (istInstagram || istBack) ? "block" : "none"
  }

  if (mealFieldsWrap) {
    mealFieldsWrap.style.display = (istInstagram || istBack) ? "block" : "none"
  }

  if (weekFieldsWrap) {
    weekFieldsWrap.style.display = "block"
  }
}

function renderGerichte() {
  const container = document.getElementById("gerichte-container")
  const gerichte = getGerichte()

  const sortierteEintraege = Object.entries(gerichte).sort((a, b) =>
    a[1].text.localeCompare(b[1].text, "de")
  )

  container.innerHTML = ""

  sortierteEintraege.forEach(([key, gericht]) => {
    const card = document.createElement("div")
    card.className = "gericht-card"

    card.innerHTML = `
      <h2>${key}</h2>

      <div class="gericht-grid">
        <div>
          <label>Name / Text</label>
          <input type="text" id="text-${key}" value="${gericht.text}">
        </div>

        <div>
          <label>Preis</label>
          <input type="text" id="preis-${key}" value="${gericht.preis}">
        </div>

        <div>
          <label>Bildpfad</label>
          <input type="text" id="bild-${key}" value="${gericht.bild}">
        </div>
      </div>

      <button onclick="deleteGericht('${key}')">Gericht löschen</button>
    `

    container.appendChild(card)
  })
}

function saveGerichte() {
  const gerichte = getGerichte()

  Object.keys(gerichte).forEach((key) => {
    gerichte[key].text = document.getElementById(`text-${key}`).value
    gerichte[key].preis = document.getElementById(`preis-${key}`).value
    gerichte[key].bild = document.getElementById(`bild-${key}`).value
  })

  localStorage.setItem(getStorageKey("gerichte"), JSON.stringify(gerichte))
  document.getElementById("status").textContent = "Änderungen gespeichert."
}

function resetGerichte() {
  localStorage.removeItem(getStorageKey("gerichte"))
  renderGerichte()
  document.getElementById("status").textContent = "Auf Standard zurückgesetzt."
}

function addGericht() {
  const name = prompt("Name des Gerichts:")
  if (!name) return

  const preis = prompt("Preis:")
  if (!preis) return

  const bild = prompt("Bildpfad (z.B. Gerichte/neuesgericht.jpg):")
  if (!bild) return

  const id = name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, "_")

  const gerichte = getGerichte()

  gerichte[id] = {
    text: name,
    preis: preis,
    bild: bild
  }

  localStorage.setItem(getStorageKey("gerichte"), JSON.stringify(gerichte))
  renderGerichte()
}

function deleteGericht(id) {
  if (!confirm("Gericht wirklich löschen?")) return

  const gerichte = getGerichte()
  delete gerichte[id]

  localStorage.setItem(getStorageKey("gerichte"), JSON.stringify(gerichte))
  renderGerichte()
}

function renderAdminLayoutDropdown() {
  const select = document.getElementById("layout-auswahl")
  if (!select) return

  const kunde = getAktuellerKunde()
  const layoutsFuerKunde = kundenLayouts[kunde] || {}

  select.innerHTML = ""

  Object.keys(layoutsFuerKunde).forEach((layoutKey) => {
    const option = document.createElement("option")
    option.value = layoutKey
    option.textContent = layoutKey.charAt(0).toUpperCase() + layoutKey.slice(1)
    select.appendChild(option)
  })

  const defaultLayout = kunden[kunde]?.defaultLayout || Object.keys(layoutsFuerKunde)[0]
  if (defaultLayout) {
    select.value = defaultLayout
  }
}

function ladePositionsWerte() {
  const layout = document.getElementById("layout-auswahl").value
  const format = document.getElementById("format-auswahl").value
  const tag = document.getElementById("tag-auswahl").value
  const bereich = document.getElementById("bereich-auswahl")?.value || "links"
  const kunde = getAktuellerKunde()

  const layoutsFuerKunde = kundenLayouts[kunde] || {}
  const overrides = getLayoutOverrides()

  const standardFormat = layoutsFuerKunde[layout]?.[format]
  const customFormat = overrides?.[layout]?.[format] || {}

  let finalMeal = {}
  let finalWeek = {}

  // Instagram: feed/story
  if (standardFormat?.meals) {
    const standardMeal = standardFormat.meals?.[tag] || {}
    const customMeal = customFormat.meals?.[tag] || {}

    finalMeal = {
      ...standardMeal,
      ...customMeal
    }

    finalWeek = {
      ...(standardFormat.woche || {}),
      ...(customFormat.woche || {})
    }
  }

  // Druck Front
  if (format === "front" && standardFormat?.datum) {
    finalWeek = {
      ...(standardFormat.datum || {}),
      ...(customFormat.datum || {})
    }

    finalMeal = {}
  }

  // Druck Back
  if (format === "back" && standardFormat?.[bereich]) {
    const standardSeite = standardFormat[bereich]
    const customSeite = customFormat?.[bereich] || {}

    finalMeal = {
      ...(standardSeite.meals?.[tag] || {}),
      ...(customSeite.meals?.[tag] || {})
    }

    finalWeek = {
      ...(standardSeite.woche || {}),
      ...(customSeite.woche || {})
    }
  }

  document.getElementById("imageX").value = finalMeal.imageX ?? ""
  document.getElementById("imageY").value = finalMeal.imageY ?? ""
  document.getElementById("imageRadius").value = finalMeal.imageRadius ?? ""
  document.getElementById("textX").value = finalMeal.textX ?? ""
  document.getElementById("textY").value = finalMeal.textY ?? ""
  document.getElementById("textMaxWidth").value = finalMeal.textMaxWidth ?? ""
  document.getElementById("textLineHeight").value = finalMeal.textLineHeight ?? ""
  document.getElementById("priceX").value = finalMeal.priceX ?? ""
  document.getElementById("priceY").value = finalMeal.priceY ?? ""
  document.getElementById("priceColor").value = finalMeal.priceColor ?? "#2f2f2f"
  document.getElementById("textFontSize").value = finalMeal.textFontSize ?? ""
  document.getElementById("priceFontSize").value = finalMeal.priceFontSize ?? ""

  document.getElementById("weekX").value = finalWeek.x ?? ""
  document.getElementById("weekY").value = finalWeek.y ?? ""
  document.getElementById("weekFontSize").value = finalWeek.fontSize ?? ""

  renderAdminPreview()
}

function speicherePositionsWerte() {
  const layout = document.getElementById("layout-auswahl").value
  const format = document.getElementById("format-auswahl").value
  const tag = document.getElementById("tag-auswahl").value
  const bereich = document.getElementById("bereich-auswahl")?.value || "links"

  const overrides = getLayoutOverrides()

  if (!overrides[layout]) overrides[layout] = {}
  if (!overrides[layout][format]) overrides[layout][format] = {}

  const mealData = {
    imageX: Number(document.getElementById("imageX").value),
    imageY: Number(document.getElementById("imageY").value),
    imageRadius: Number(document.getElementById("imageRadius").value),
    textX: Number(document.getElementById("textX").value),
    textY: Number(document.getElementById("textY").value),
    textMaxWidth: Number(document.getElementById("textMaxWidth").value),
    textLineHeight: Number(document.getElementById("textLineHeight").value),
    priceX: Number(document.getElementById("priceX").value),
    priceY: Number(document.getElementById("priceY").value),
    priceColor: document.getElementById("priceColor").value,
    textFontSize: Number(document.getElementById("textFontSize").value),
    priceFontSize: Number(document.getElementById("priceFontSize").value)
  }

  const weekData = {
    x: Number(document.getElementById("weekX").value),
    y: Number(document.getElementById("weekY").value),
    fontSize: Number(document.getElementById("weekFontSize").value)
  }

  // Instagram
  if (format === "feed" || format === "story") {
    if (!overrides[layout][format].meals) overrides[layout][format].meals = {}
    overrides[layout][format].meals[tag] = mealData
    overrides[layout][format].woche = weekData
  }

  // Druck Front
  if (format === "front") {
    overrides[layout][format].datum = weekData
  }

  // Druck Back
  if (format === "back") {
    if (!overrides[layout][format][bereich]) overrides[layout][format][bereich] = {}
    if (!overrides[layout][format][bereich].meals) overrides[layout][format][bereich].meals = {}

    overrides[layout][format][bereich].meals[tag] = mealData
    overrides[layout][format][bereich].woche = weekData
  }

  saveLayoutOverrides(overrides)
  document.getElementById("layout-status").textContent = "Positionswerte gespeichert."
  ladePositionsWerte()
}

function resetPositionsWerte() {
  const layout = document.getElementById("layout-auswahl").value
  const format = document.getElementById("format-auswahl").value
  const tag = document.getElementById("tag-auswahl").value

  const overrides = getLayoutOverrides()

  if (
    overrides[layout] &&
    overrides[layout][format] &&
    overrides[layout][format].meals &&
    overrides[layout][format].meals[tag]
  ) {
    delete overrides[layout][format].meals[tag]
    saveLayoutOverrides(overrides)
  }

  ladePositionsWerte()
  document.getElementById("layout-status").textContent = "Positionswerte zurückgesetzt."
}

function getAdminPreviewGerichte() {
  return {
    dienstag: { bild: "Gerichte/currywurst.jpg", preis: "6,80 €", text: "Currywurst mit Semmel" },
    mittwoch: { bild: "Gerichte/cordonbleu.jpg", preis: "6,80 €", text: "Cordon Bleu mit Kartoffelsalat" },
    donnerstag: { bild: "Gerichte/gulasch.jpg", preis: "6,80 €", text: "Gulasch mit Spätzle" },
    freitag: { bild: "Gerichte/lasagne.jpg", preis: "6,80 €", text: "Lasagne" }
  }
}

function handleKundeChange() {
  const kunde = getAktuellerKunde()
  setAktuellerKunde(kunde)

  renderGerichte()
  renderAdminLayoutDropdown()
  ladePositionsWerte()
  renderAdminPreview()
}

function loadImageAdmin(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error("Bild konnte nicht geladen werden: " + src))

    const trenner = src.includes("?") ? "&" : "?"
    img.src = `${src}${trenner}v=${Date.now()}`
  })
}

function drawWrappedTextAdmin(ctx, text, x, y, maxWidth, lineHeight) {
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

function drawImageCoverAdmin(ctx, img, cx, cy, radius) {
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

function getPreviewLayout() {
  const layout = document.getElementById("layout-auswahl").value
  const format = document.getElementById("format-auswahl").value
  const tag = document.getElementById("tag-auswahl").value
  const bereich = document.getElementById("bereich-auswahl")?.value || "links"
  const kunde = getAktuellerKunde()

  const overrides = getLayoutOverrides()
  const layoutsFuerKunde = kundenLayouts[kunde] || {}
  const standard = JSON.parse(JSON.stringify(layoutsFuerKunde[layout][format]))

  // Instagram
  if (standard.meals) {
    const gespeicherteMeals = overrides?.[layout]?.[format]?.meals || {}

    Object.keys(gespeicherteMeals).forEach((day) => {
      if (standard.meals[day]) {
        standard.meals[day] = {
          ...standard.meals[day],
          ...gespeicherteMeals[day]
        }
      }
    })

    if (overrides?.[layout]?.[format]?.woche) {
      standard.woche = {
        ...standard.woche,
        ...overrides[layout][format].woche
      }
    }

    standard.meals[tag] = {
      ...standard.meals[tag],
      imageX: Number(document.getElementById("imageX").value),
      imageY: Number(document.getElementById("imageY").value),
      imageRadius: Number(document.getElementById("imageRadius").value),
      textX: Number(document.getElementById("textX").value),
      textY: Number(document.getElementById("textY").value),
      textMaxWidth: Number(document.getElementById("textMaxWidth").value),
      textLineHeight: Number(document.getElementById("textLineHeight").value),
      priceX: Number(document.getElementById("priceX").value),
      priceY: Number(document.getElementById("priceY").value),
      priceColor: document.getElementById("priceColor").value,
      textFontSize: Number(document.getElementById("textFontSize").value),
      priceFontSize: Number(document.getElementById("priceFontSize").value)
    }

    standard.woche = {
      ...standard.woche,
      x: Number(document.getElementById("weekX").value),
      y: Number(document.getElementById("weekY").value),
      fontSize: Number(document.getElementById("weekFontSize").value)
    }
  }

  // Druck Front
  if (format === "front" && standard.datum) {
    if (overrides?.[layout]?.[format]?.datum) {
      standard.datum = {
        ...standard.datum,
        ...overrides[layout][format].datum
      }
    }

    standard.datum = {
      ...standard.datum,
      x: Number(document.getElementById("weekX").value),
      y: Number(document.getElementById("weekY").value),
      fontSize: Number(document.getElementById("weekFontSize").value)
    }
  }

  // Druck Back
  if (format === "back" && standard[bereich]) {
    const seitenOverrides = overrides?.[layout]?.[format]?.[bereich] || {}

    if (seitenOverrides.woche) {
      standard[bereich].woche = {
        ...standard[bereich].woche,
        ...seitenOverrides.woche
      }
    }

    const gespeicherteMeals = seitenOverrides.meals || {}
    Object.keys(gespeicherteMeals).forEach((day) => {
      if (standard[bereich].meals?.[day]) {
        standard[bereich].meals[day] = {
          ...standard[bereich].meals[day],
          ...gespeicherteMeals[day]
        }
      }
    })

    standard[bereich].meals[tag] = {
      ...standard[bereich].meals[tag],
      imageX: Number(document.getElementById("imageX").value),
      imageY: Number(document.getElementById("imageY").value),
      imageRadius: Number(document.getElementById("imageRadius").value),
      textX: Number(document.getElementById("textX").value),
      textY: Number(document.getElementById("textY").value),
      textMaxWidth: Number(document.getElementById("textMaxWidth").value),
      textLineHeight: Number(document.getElementById("textLineHeight").value),
      priceX: Number(document.getElementById("priceX").value),
      priceY: Number(document.getElementById("priceY").value),
      priceColor: document.getElementById("priceColor").value,
      textFontSize: Number(document.getElementById("textFontSize").value),
      priceFontSize: Number(document.getElementById("priceFontSize").value)
    }

    standard[bereich].woche = {
      ...standard[bereich].woche,
      x: Number(document.getElementById("weekX").value),
      y: Number(document.getElementById("weekY").value),
      fontSize: Number(document.getElementById("weekFontSize").value)
    }
  }

  return standard
}

async function renderAdminPreview() {
  const canvas = document.getElementById("admin-preview-canvas")
  const ctx = canvas.getContext("2d")
  const format = document.getElementById("format-auswahl").value
  const bereich = document.getElementById("bereich-auswahl")?.value || "links"
  const previewGerichte = getAdminPreviewGerichte()
  const layout = getPreviewLayout()

  try {
    canvas.width = layout.width
    canvas.height = layout.height

    const template = await loadImageAdmin(layout.template)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(template, 0, 0, canvas.width, canvas.height)

    // Instagram
    if (layout.woche && layout.meals) {
      ctx.textAlign = "center"
      ctx.fillStyle = "#111111"
      ctx.font = `700 ${layout.woche.fontSize}px 'IBM Plex Serif', Georgia, serif`
      ctx.fillText("18.02. - 20.02.2026", layout.woche.x, layout.woche.y)

      for (const day of ["dienstag", "mittwoch", "donnerstag", "freitag"]) {
        const config = layout.meals[day]
        const meal = previewGerichte[day]
        const img = await loadImageAdmin(meal.bild)

        ctx.save()
        ctx.beginPath()
        ctx.arc(config.imageX, config.imageY, config.imageRadius, 0, Math.PI * 2)
        ctx.closePath()
        ctx.clip()
        drawImageCoverAdmin(ctx, img, config.imageX, config.imageY, config.imageRadius)
        ctx.restore()

        ctx.textAlign = "center"
        ctx.fillStyle = "#2f2f2f"
        ctx.font = `500 ${config.textFontSize}px 'Raleway', Arial, sans-serif`

        drawWrappedTextAdmin(
          ctx,
          meal.text,
          config.textX,
          config.textY,
          config.textMaxWidth,
          config.textLineHeight
        )

        ctx.textAlign = "center"
        ctx.fillStyle = config.priceColor || "#2f2f2f"
        ctx.font = `600 ${config.priceFontSize}px 'Raleway', Arial, sans-serif`
        ctx.fillText(meal.preis, config.priceX, config.priceY)
      }
    }

    // Druck Front
    if (format === "front" && layout.datum) {
      ctx.textAlign = "center"
      ctx.fillStyle = "#111111"
      ctx.font = `700 ${layout.datum.fontSize}px 'IBM Plex Serif', Georgia, serif`
      ctx.fillText("18.02. - 20.02.2026", layout.datum.x, layout.datum.y)
    }

    // Druck Back
    if (format === "back" && layout.links && layout.rechts) {
      // Woche links
      ctx.textAlign = "center"
      ctx.fillStyle = "#111111"
      ctx.font = `700 ${layout.links.woche.fontSize}px 'IBM Plex Serif', Georgia, serif`
      ctx.fillText("18.02. - 20.02.2026", layout.links.woche.x, layout.links.woche.y)

      // Woche rechts
      ctx.textAlign = "center"
      ctx.fillStyle = "#111111"
      ctx.font = `700 ${layout.rechts.woche.fontSize}px 'IBM Plex Serif', Georgia, serif`
      ctx.fillText("25.02. - 27.02.2026", layout.rechts.woche.x, layout.rechts.woche.y)

      for (const day of ["dienstag", "mittwoch", "donnerstag", "freitag"]) {
        // links
        {
          const config = layout.links.meals[day]
          const meal = previewGerichte[day]
          const img = await loadImageAdmin(meal.bild)

          ctx.save()
          ctx.beginPath()
          ctx.arc(config.imageX, config.imageY, config.imageRadius, 0, Math.PI * 2)
          ctx.closePath()
          ctx.clip()
          drawImageCoverAdmin(ctx, img, config.imageX, config.imageY, config.imageRadius)
          ctx.restore()

          ctx.textAlign = "center"
          ctx.fillStyle = "#2f2f2f"
          ctx.font = `500 ${config.textFontSize}px 'Raleway', Arial, sans-serif`

          drawWrappedTextAdmin(
            ctx,
            meal.text,
            config.textX,
            config.textY,
            config.textMaxWidth,
            config.textLineHeight
          )

          ctx.textAlign = "center"
          ctx.fillStyle = config.priceColor || "#2f2f2f"
          ctx.font = `600 ${config.priceFontSize}px 'Raleway', Arial, sans-serif`
          ctx.fillText(meal.preis, config.priceX, config.priceY)
        }

        // rechts
        {
          const config = layout.rechts.meals[day]
          const meal = previewGerichte[day]
          const img = await loadImageAdmin(meal.bild)

          ctx.save()
          ctx.beginPath()
          ctx.arc(config.imageX, config.imageY, config.imageRadius, 0, Math.PI * 2)
          ctx.closePath()
          ctx.clip()
          drawImageCoverAdmin(ctx, img, config.imageX, config.imageY, config.imageRadius)
          ctx.restore()

          ctx.textAlign = "center"
          ctx.fillStyle = "#2f2f2f"
          ctx.font = `500 ${config.textFontSize}px 'Raleway', Arial, sans-serif`

          drawWrappedTextAdmin(
            ctx,
            meal.text,
            config.textX,
            config.textY,
            config.textMaxWidth,
            config.textLineHeight
          )

          ctx.textAlign = "center"
          ctx.fillStyle = config.priceColor || "#2f2f2f"
          ctx.font = `600 ${config.priceFontSize}px 'Raleway', Arial, sans-serif`
          ctx.fillText(meal.preis, config.priceX, config.priceY)
        }
      }
    }

    document.getElementById("layout-status").textContent = "Vorschau aktualisiert."
  } catch (error) {
    console.error(error)
    document.getElementById("layout-status").textContent = "Fehler in der Vorschau: " + error.message
  }
}

function getCanvasCoords(canvas, event) {
  const rect = canvas.getBoundingClientRect()

  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height

  return {
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - rect.top) * scaleY
  }
}

let dragTarget = null

function startDrag(e) {
  const canvas = document.getElementById("admin-preview-canvas")
  const pos = getCanvasCoords(canvas, e)

  const x = pos.x
  const y = pos.y

  const layout = getPreviewLayout()
  const tag = document.getElementById("tag-auswahl").value
  const meal = layout.meals[tag]

  const targets = [
    { type: "image", x: meal.imageX, y: meal.imageY },
    { type: "text", x: meal.textX, y: meal.textY },
    { type: "price", x: meal.priceX, y: meal.priceY }
  ]

  for (const t of targets) {
    const dx = x - t.x
    const dy = y - t.y
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < 80) {
      dragTarget = t.type
      break
    }
  }
}

function dragMove(e) {
  if (!dragTarget) return

  const canvas = document.getElementById("admin-preview-canvas")
  const pos = getCanvasCoords(canvas, e)

  const x = pos.x
  const y = pos.y

  if (dragTarget === "image") {
    document.getElementById("imageX").value = Math.round(x)
    document.getElementById("imageY").value = Math.round(y)
  }

  if (dragTarget === "text") {
    document.getElementById("textX").value = Math.round(x)
    document.getElementById("textY").value = Math.round(y)
  }

  if (dragTarget === "price") {
    document.getElementById("priceX").value = Math.round(x)
    document.getElementById("priceY").value = Math.round(y)
  }

  renderAdminPreview()
}

function endDrag() {
  dragTarget = null
}

window.addEventListener("DOMContentLoaded", () => {
  const kundeSelect = document.getElementById("kunde")
  const gespeicherterKunde = localStorage.getItem("aktuellerKunde") || "sorgundseitz"

  if (kundeSelect) {
    kundeSelect.value = gespeicherterKunde
  }

  renderGerichte()
  updateFormatAuswahl()
  updateAdminEditorUI()
  ladePositionsWerte()
  renderAdminPreview()

  const canvas = document.getElementById("admin-preview-canvas")
  if (canvas) {
    canvas.addEventListener("mousedown", startDrag)
    canvas.addEventListener("mousemove", dragMove)
    canvas.addEventListener("mouseup", endDrag)
  }
})