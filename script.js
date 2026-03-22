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

async function drawMealFromId(ctx, selectId, config) {
  const value = document.getElementById(selectId)?.value
  const meal = gerichte[value]

  if (!meal) {
    throw new Error("Kein Gericht gefunden für: " + selectId)
  }

  if (!meal.bild) {
    throw new Error(`Gericht "${value}" hat keinen Bildpfad.`)
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
  ctx.font = `500 ${config.textFontSize}px 'Raleway', Arial, sans-serif`

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
  ctx.font = `600 ${config.priceFontSize}px 'Raleway', Arial, sans-serif`

  ctx.fillText(meal.preis, config.priceX, config.priceY)
}

function updateVorlageBereiche() {
  const config = getAktiveVorlageConfig()

  console.log("updateVorlageBereiche config:", config)

  if (!config) return

  const formats = config.formats || []
  const istDruck = formats.includes("front") || formats.includes("back")

  console.log("formats:", formats, "istDruck:", istDruck)

  const instagramWocheBlock = document.getElementById("instagram-woche-block")
  const druckFrontBlock = document.getElementById("druck-front-block")
  const druckWoche1Block = document.getElementById("druck-woche1-block")
  const druckWoche2Block = document.getElementById("druck-woche2-block")
  const gerichtePanel = document.getElementById("gerichte-panel")
  const bereich2Title = document.getElementById("bereich2-title")
  const captionPanel = document.getElementById("caption-panel")

  if (bereich2Title) {
    bereich2Title.textContent = istDruck ? "2. Druck-Inhalte" : "2. Kalenderwoche"
  }

  if (druckFrontBlock) {
    druckFrontBlock.style.display = istDruck ? "block" : "none"
  }

  if (druckWoche1Block) {
    druckWoche1Block.style.display = istDruck ? "block" : "none"
  }

  if (druckWoche2Block) {
    druckWoche2Block.style.display = istDruck ? "block" : "none"
  }

  if (gerichtePanel) {
    gerichtePanel.style.display = istDruck ? "none" : "block"
  }

  if (instagramWocheBlock) {
    instagramWocheBlock.style.display = istDruck ? "none" : "block"
  }
  if (captionPanel) {
  captionPanel.style.display = istDruck ? "none" : "block"
}
}

function openPreviewModal(sourceCanvasId) {
  const sourceCanvas = document.getElementById(sourceCanvasId)
  const modal = document.getElementById("preview-modal")
  const modalCanvas = document.getElementById("preview-modal-canvas")

  if (!sourceCanvas || !modal || !modalCanvas) return

  modalCanvas.width = sourceCanvas.width
  modalCanvas.height = sourceCanvas.height

  const ctx = modalCanvas.getContext("2d")
  ctx.clearRect(0, 0, modalCanvas.width, modalCanvas.height)
  ctx.drawImage(sourceCanvas, 0, 0)

  modal.style.display = "block"
}



function closePreviewModal() {
  const modal = document.getElementById("preview-modal")
  if (modal) {
    modal.style.display = "none"
  }
}

function updatePreisFeld(dayId) {
  const select = document.getElementById(dayId)
  const preisInput = document.getElementById(`preis-${dayId}`)

  if (!select || !preisInput) return

  const gerichtKey = select.value
  const gericht = gerichte?.[gerichtKey]

  console.log("Preisfeld Test:", {
    dayId,
    gerichtKey,
    gericht
  })

  preisInput.value = gericht?.preis || ""
}

function handleMealChange(dayId) {
  updatePreisFeld(dayId)
  updatePreviews()
}

function getGerichte() {
  return safeParseStorage(getStorageKey("gerichte"), structuredClone(standardGerichte))
}

function getGespeicherteWochen() {
  return safeParseStorage(getStorageKey("wochenplaene"), {})
}

function getLayoutOverrides() {
  return safeParseStorage(getStorageKey("layoutOverrides"), {})
}

let gerichte = getGerichte()

function getAlleGerichteSortiert() {
  return Object.entries(gerichte).sort((a, b) =>
    a[1].text.localeCompare(b[1].text, "de")
  )
}

function getVorlagenFuerKunde() {
  const kunde = getAktuellerKunde()
  return generatorVorlagen[kunde] || {}
}

function renderVorlagenDropdown() {
  const select = document.getElementById("vorlage")
  if (!select) return

  const vorlagen = getVorlagenFuerKunde()

  select.innerHTML = ""

  Object.entries(vorlagen).forEach(([key, config]) => {
    const option = document.createElement("option")
    option.value = key
    option.textContent = config.name
    select.appendChild(option)
  })

  const ersterKey = Object.keys(vorlagen)[0]
  if (ersterKey) {
    select.value = ersterKey
  }
}

function updatePreviewBereiche() {
  const config = getAktiveVorlageConfig()

  const instagramWrap = document.getElementById("preview-instagram")
  const druckWrap = document.getElementById("preview-druck")

  if (!instagramWrap || !druckWrap || !config) return

  const formats = config.formats || []
  const istInstagram = formats.includes("story") || formats.includes("feed")
  const istDruck = formats.includes("front") || formats.includes("back")

  instagramWrap.style.display = istInstagram ? "flex" : "none"
  druckWrap.style.display = istDruck ? "flex" : "none"
}

function getAktiveVorlageConfig() {
  const vorlageKey = document.getElementById("vorlage")?.value
  const vorlagen = getVorlagenFuerKunde()
  return vorlagen[vorlageKey] || null
}

function updateDownloadButtons() {
  const config = getAktiveVorlageConfig()

  const storyBtn = document.getElementById("btn-story")
  const feedBtn = document.getElementById("btn-feed")
  const bothBtn = document.getElementById("btn-both")
  const frontBtn = document.getElementById("btn-front")
  const backBtn = document.getElementById("btn-back")
  const printBtn = document.getElementById("btn-print")

  if (!storyBtn || !feedBtn || !bothBtn || !frontBtn || !backBtn || !printBtn) return

  storyBtn.style.display = "none"
  feedBtn.style.display = "none"
  bothBtn.style.display = "none"
  frontBtn.style.display = "none"
  backBtn.style.display = "none"
  printBtn.style.display = "none"

  if (!config) return

  const formats = config.formats || []

  if (formats.includes("story")) {
    storyBtn.style.display = "inline-block"
  }

  if (formats.includes("feed")) {
    feedBtn.style.display = "inline-block"
  }

  if (formats.includes("story") && formats.includes("feed")) {
    bothBtn.style.display = "inline-block"
  }

  if (formats.includes("front")) {
    frontBtn.style.display = "inline-block"
  }

  if (formats.includes("back")) {
    backBtn.style.display = "inline-block"
  }

  if (formats.includes("front") && formats.includes("back")) {
    printBtn.style.display = "inline-block"
  }
}

function handleVorlageChange() {
  updateDownloadButtons()
  updateVorlageBereiche()
  updatePreviewBereiche()
  updatePreviews()
}




async function downloadFront() {
  const status = document.getElementById("status")

  try {
    const canvas = document.createElement("canvas")
    const imageData = await renderToCanvas(canvas, "front")
    downloadDataUrl(imageData, `mittagstisch-front-${Date.now()}.png`)
    status.textContent = "Vorderseite heruntergeladen."
  } catch (err) {
    console.error(err)
    status.textContent = "Fehler: " + err.message
  }
}

async function downloadBack() {
  const status = document.getElementById("status")

  try {
    const canvas = document.createElement("canvas")
    const imageData = await renderToCanvas(canvas, "back")
    downloadDataUrl(imageData, `mittagstisch-back-${Date.now()}.png`)
    status.textContent = "Rückseite heruntergeladen."
  } catch (err) {
    console.error(err)
    status.textContent = "Fehler: " + err.message
  }
}

async function downloadPrint() {
  const status = document.getElementById("status")

  try {
    await downloadFront()
    await new Promise(resolve => setTimeout(resolve, 300))
    await downloadBack()
    status.textContent = "Beide Druckseiten heruntergeladen."
  } catch (err) {
    console.error(err)
    status.textContent = "Fehler: " + err.message
  }
}

function renderLayoutDropdown() {
  const select = document.getElementById("vorlage")
  if (!select) return

  const kunde = getAktuellerKunde()
  const layoutsFuerKunde = kundenLayouts[kunde] || {}

  select.innerHTML = ""

  Object.keys(layoutsFuerKunde).forEach((layout) => {
    if (layout !== "mittagstisch") return

    const option = document.createElement("option")
    option.value = layout
    option.textContent = layout
    select.appendChild(option)
  })

  select.value = "mittagstisch"
}

function fuelleDropdown(id, standardWert = "", gefilterteListe = null) {
  const select = document.getElementById(id)
  if (!select) return

  if (!gefilterteListe) {
    gefilterteListe = getAlleGerichteSortiert()
  }

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

  const gefilterteListe = getAlleGerichteSortiert().filter(([key, gericht]) =>
    gericht.text.toLowerCase().includes(suchtext)
  )

  fuelleDropdown(selectId, "", gefilterteListe)
}

function initialisiereDropdowns() {
  fuelleDropdown("dienstag", "currywurst")
  fuelleDropdown("mittwoch", "cordonbleu")
  fuelleDropdown("donnerstag", "gulasch")
  fuelleDropdown("freitag", "lasagne")

  fuelleDropdown("druck-dienstag", "currywurst")
  fuelleDropdown("druck-mittwoch", "cordonbleu")
  fuelleDropdown("druck-donnerstag", "gulasch")
  fuelleDropdown("druck-freitag", "lasagne")

  fuelleDropdown("dienstag2", "currywurst")
  fuelleDropdown("mittwoch2", "cordonbleu")
  fuelleDropdown("donnerstag2", "gulasch")
  fuelleDropdown("freitag2", "lasagne")
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject(new Error("loadImage hat keinen gültigen src-Wert bekommen"))
      return
    }

    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error("Bild konnte nicht geladen werden: " + src))

    const trenner = src.includes("?") ? "&" : "?"
    img.src = `${src}${trenner}v=${Date.now()}`
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

  if (!meal.bild) {
    throw new Error(`Gericht "${value}" hat keinen Bildpfad.`)
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
  ctx.font = `500 ${config.textFontSize}px 'Raleway', Arial, sans-serif`

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
  ctx.font = `600 ${config.priceFontSize}px 'Raleway', Arial, sans-serif`

  ctx.fillText(meal.preis, config.priceX, config.priceY)
}

async function drawMealFromId(ctx, selectId, config) {

  const value = document.getElementById(selectId)?.value
  const meal = gerichte[value]

  if (!meal) return

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
  ctx.font = `500 ${config.textFontSize}px 'Raleway'`

  drawWrappedText(
    ctx,
    meal.text,
    config.textX,
    config.textY,
    config.textMaxWidth,
    config.textLineHeight
  )

  ctx.fillStyle = config.priceColor || "#2f2f2f"
  ctx.font = `600 ${config.priceFontSize}px 'Raleway'`

  ctx.fillText(meal.preis, config.priceX, config.priceY)
}

function getFinalLayout(layoutName, formatName) {
  const overrides = getLayoutOverrides()
  const kunde = getAktuellerKunde()

  const layoutsFuerKunde = kundenLayouts[kunde]
  if (!layoutsFuerKunde || !layoutsFuerKunde[layoutName]) {
    throw new Error(`Kein Layout "${layoutName}" für Kunde "${kunde}" gefunden.`)
  }

  const standard = JSON.parse(JSON.stringify(layoutsFuerKunde[layoutName][formatName]))

  const formatOverrides = overrides?.[layoutName]?.[formatName] || {}

  // Instagram-Logik: woche + meals
  if (standard.meals) {
    const gespeicherteMeals = formatOverrides.meals || {}

    Object.keys(gespeicherteMeals).forEach((day) => {
      if (standard.meals[day]) {
        standard.meals[day] = {
          ...standard.meals[day],
          ...gespeicherteMeals[day]
        }
      }
    })

    if (formatOverrides.woche) {
      standard.woche = {
        ...standard.woche,
        ...formatOverrides.woche
      }
    }
  }

  // Druck Front: datum
  if (standard.datum && formatOverrides.datum) {
    standard.datum = {
      ...standard.datum,
      ...formatOverrides.datum
    }
  }

  // Druck Back: links/rechts mit eigener Woche + meals
  if (standard.links || standard.rechts) {
    ;["links", "rechts"].forEach((seite) => {
      if (!standard[seite]) return

      const seitenOverrides = formatOverrides?.[seite] || {}

      if (seitenOverrides.woche) {
        standard[seite].woche = {
          ...standard[seite].woche,
          ...seitenOverrides.woche
        }
      }

      const gespeicherteMeals = seitenOverrides.meals || {}
      Object.keys(gespeicherteMeals).forEach((day) => {
        if (standard[seite].meals?.[day]) {
          standard[seite].meals[day] = {
            ...standard[seite].meals[day],
            ...gespeicherteMeals[day]
          }
        }
      })
    })
  }

  return standard
}

async function renderToCanvas(canvas, formatName) {
  const ctx = canvas.getContext("2d")
  const vorlageConfig = getAktiveVorlageConfig()

  if (!vorlageConfig) {
    throw new Error("Keine Vorlage ausgewählt.")
  }

  const layoutName = vorlageConfig.layout
  const layout = getFinalLayout(layoutName, formatName)

  if (!layout) {
    throw new Error("Kein Layout/Format gefunden: " + layoutName + " / " + formatName)
  }

  if (!layout.template) {
    throw new Error("Im Layout fehlt template.")
  }

  canvas.width = layout.width
  canvas.height = layout.height

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const template = await loadImage(layout.template)
  ctx.drawImage(template, 0, 0, canvas.width, canvas.height)

  // DRUCK VORDERSEITE
  if (formatName === "front") {
    const datum = document.getElementById("druck-front-datum").value

    if (!layout.datum) {
      throw new Error('Druck-Vorderseite braucht "datum" im Layout.')
    }

    ctx.textAlign = "center"
    ctx.fillStyle = "#111111"
    ctx.font = `700 ${layout.datum.fontSize}px 'IBM Plex Serif', Georgia, serif`
    ctx.fillText(datum, layout.datum.x, layout.datum.y)

    return canvas.toDataURL("image/png")
  }

  // DRUCK RÜCKSEITE
  if (formatName === "back") {
    const wocheLinks = document.getElementById("druck-woche-links").value
    const wocheRechts = document.getElementById("druck-woche-rechts").value

    if (!layout.links || !layout.rechts) {
      throw new Error('Druck-Rückseite braucht "links" und "rechts" im Layout.')
    }

    ctx.textAlign = "center"
    ctx.fillStyle = "#111111"

    ctx.font = `700 ${layout.links.woche.fontSize}px 'IBM Plex Serif', Georgia, serif`
    ctx.fillText(wocheLinks, layout.links.woche.x, layout.links.woche.y)

    ctx.font = `700 ${layout.rechts.woche.fontSize}px 'IBM Plex Serif', Georgia, serif`
    ctx.fillText(wocheRechts, layout.rechts.woche.x, layout.rechts.woche.y)

   await drawMealFromId(ctx, "druck-dienstag", layout.links.meals.dienstag)
   await drawMealFromId(ctx, "druck-mittwoch", layout.links.meals.mittwoch)
   await drawMealFromId(ctx, "druck-donnerstag", layout.links.meals.donnerstag)
   await drawMealFromId(ctx, "druck-freitag", layout.links.meals.freitag)

    await drawMealFromId(ctx, "dienstag2", layout.rechts.meals.dienstag)
    await drawMealFromId(ctx, "mittwoch2", layout.rechts.meals.mittwoch)
    await drawMealFromId(ctx, "donnerstag2", layout.rechts.meals.donnerstag)
    await drawMealFromId(ctx, "freitag2", layout.rechts.meals.freitag)

    return canvas.toDataURL("image/png")
  }

  // INSTAGRAM STORY / FEED
  const woche = document.getElementById("woche").value

  if (!layout.woche || !layout.meals) {
    throw new Error(`Layout "${layoutName}" im Format "${formatName}" ist nicht für den Mittagstisch-Generator vorbereitet.`)
  }

  ctx.textAlign = "center"
  ctx.fillStyle = "#111111"
  ctx.font = `700 ${layout.woche.fontSize}px 'IBM Plex Serif', Georgia, serif`
  ctx.fillText(woche, layout.woche.x, layout.woche.y)

  await drawMeal(ctx, "dienstag", layout.meals.dienstag)
  await drawMeal(ctx, "mittwoch", layout.meals.mittwoch)
  await drawMeal(ctx, "donnerstag", layout.meals.donnerstag)
  await drawMeal(ctx, "freitag", layout.meals.freitag)

  return canvas.toDataURL("image/png")
}

function downloadDataUrl(dataUrl, filename) {
  const link = document.createElement("a")
  link.href = dataUrl
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

async function updatePreviews() {
  const status = document.getElementById("status")
  const config = getAktiveVorlageConfig()

  try {
    const storyCanvas = document.getElementById("preview-story")
    const feedCanvas = document.getElementById("preview-feed")
    const frontCanvas = document.getElementById("preview-front")
    const backCanvas = document.getElementById("preview-back")

    if (storyCanvas) {
      const ctx = storyCanvas.getContext("2d")
      ctx.clearRect(0, 0, storyCanvas.width, storyCanvas.height)
    }

    if (feedCanvas) {
      const ctx = feedCanvas.getContext("2d")
      ctx.clearRect(0, 0, feedCanvas.width, feedCanvas.height)
    }

    if (frontCanvas) {
      const ctx = frontCanvas.getContext("2d")
      ctx.clearRect(0, 0, frontCanvas.width, frontCanvas.height)
    }

    if (backCanvas) {
      const ctx = backCanvas.getContext("2d")
      ctx.clearRect(0, 0, backCanvas.width, backCanvas.height)
    }

    if (!config) {
      status.textContent = "Keine Vorlage ausgewählt."
      return
    }

    const formats = config.formats || []

    if (formats.includes("story") && storyCanvas) {
      await renderToCanvas(storyCanvas, "story")
    }

    if (formats.includes("feed") && feedCanvas) {
      await renderToCanvas(feedCanvas, "feed")
    }

    if (formats.includes("front") && frontCanvas) {
      await renderToCanvas(frontCanvas, "front")
    }

    if (formats.includes("back") && backCanvas) {
      await renderToCanvas(backCanvas, "back")
    }

    status.textContent = "Vorschau aktualisiert."
    generateCaption()
  } catch (err) {
    console.error(err)
    status.textContent = "Fehler in der Vorschau: " + err.message
  }
}

async function downloadBack() {
  const status = document.getElementById("status")

  try {
    const canvas = document.createElement("canvas")
    const imageData = await renderToCanvas(canvas, "back")
    downloadDataUrl(imageData, `mittagstisch-back-${Date.now()}.png`)
    status.textContent = "Rückseite heruntergeladen."
  } catch (err) {
    console.error(err)
    status.textContent = "Fehler: " + err.message
  }
}

async function downloadPrint() {
  const status = document.getElementById("status")

  try {
    await downloadFront()
    await new Promise(resolve => setTimeout(resolve, 300))
    await downloadBack()
    status.textContent = "Beide Druckseiten heruntergeladen."
  } catch (err) {
    console.error(err)
    status.textContent = "Fehler: " + err.message
  }
}

async function downloadStory() {
  const status = document.getElementById("status")

  try {
    const canvas = document.createElement("canvas")
    const imageData = await renderToCanvas(canvas, "story")
    downloadDataUrl(imageData, `klassisch-story-${Date.now()}.png`)
    status.textContent = "Story heruntergeladen."
  } catch (err) {
    console.error(err)
    status.textContent = "Fehler: " + err.message
  }
}

async function downloadFeed() {
  const status = document.getElementById("status")

  try {
    const canvas = document.createElement("canvas")
    const imageData = await renderToCanvas(canvas, "feed")
    downloadDataUrl(imageData, `klassisch-feed-${Date.now()}.png`)
    status.textContent = "Feed heruntergeladen."
  } catch (err) {
    console.error(err)
    status.textContent = "Fehler: " + err.message
  }
}

async function downloadBoth() {
  const status = document.getElementById("status")

  try {
    const storyCanvas = document.createElement("canvas")
    const feedCanvas = document.createElement("canvas")

    const storyData = await renderToCanvas(storyCanvas, "story")
    downloadDataUrl(storyData, `klassisch-story-${Date.now()}.png`)

    await new Promise(resolve => setTimeout(resolve, 300))

    const feedData = await renderToCanvas(feedCanvas, "feed")
    downloadDataUrl(feedData, `klassisch-feed-${Date.now()}.png`)

    status.textContent = "Story und Feed heruntergeladen."
  } catch (err) {
    console.error(err)
    status.textContent = "Fehler: " + err.message
  }
}

function generateCaption() {
  const dienstag = gerichte[document.getElementById("dienstag").value]?.text || ""
  const mittwoch = gerichte[document.getElementById("mittwoch").value]?.text || ""
  const donnerstag = gerichte[document.getElementById("donnerstag").value]?.text || ""
  const freitag = gerichte[document.getElementById("freitag").value]?.text || ""
  const woche = document.getElementById("woche").value

  const caption =
`Unser Mittagstisch diese Woche 🍽️

${woche}

Dienstag
${dienstag}

Mittwoch
${mittwoch}

Donnerstag
${donnerstag}

Freitag
${freitag}

Wir freuen uns auf euren Besuch!

#mittagstisch #metzgerei #regional`

  const captionField = document.getElementById("caption")
  if (captionField) {
    captionField.value = caption
  }
}

function copyCaption() {
  const textarea = document.getElementById("caption")
  if (!textarea) return
  textarea.select()
  document.execCommand("copy")
}

function saveWoche() {
  const name = document.getElementById("wochenname").value.trim()
  if (!name) {
    document.getElementById("status").textContent = "Bitte einen Wochenname eingeben."
    return
  }

  const wochen = getGespeicherteWochen()

  wochen[name] = {
    wocheText: document.getElementById("woche").value,
    dienstag: document.getElementById("dienstag").value,
    mittwoch: document.getElementById("mittwoch").value,
    donnerstag: document.getElementById("donnerstag").value,
    freitag: document.getElementById("freitag").value
  }

  localStorage.setItem(getStorageKey("wochenplaene"), JSON.stringify(wochen))
  renderWochenDropdown()
  document.getElementById("status").textContent = "Woche gespeichert."
}

function renderWochenDropdown() {
  const select = document.getElementById("gespeicherte-wochen")
  if (!select) return

  const wochen = getGespeicherteWochen()
  const namen = Object.keys(wochen).sort((a, b) => a.localeCompare(b, "de"))

  select.innerHTML = ""

  if (namen.length === 0) {
    const option = document.createElement("option")
    option.value = ""
    option.textContent = "Keine gespeicherten Wochen"
    select.appendChild(option)
    return
  }

  namen.forEach((name) => {
    const option = document.createElement("option")
    option.value = name
    option.textContent = name
    select.appendChild(option)
  })
}

function loadWoche() {
  const select = document.getElementById("gespeicherte-wochen")
  const name = select.value

  if (!name) {
    document.getElementById("status").textContent = "Bitte eine gespeicherte Woche auswählen."
    return
  }

  const wochen = getGespeicherteWochen()
  const daten = wochen[name]

  if (!daten) {
    document.getElementById("status").textContent = "Gespeicherte Woche nicht gefunden."
    return
  }

  document.getElementById("woche").value = daten.wocheText || ""
  document.getElementById("wochenname").value = name
  document.getElementById("dienstag").value = daten.dienstag
  document.getElementById("mittwoch").value = daten.mittwoch
  document.getElementById("donnerstag").value = daten.donnerstag
  document.getElementById("freitag").value = daten.freitag

  document.getElementById("status").textContent = "Woche geladen."
  updatePreviews()
}

function deleteWoche() {
  const select = document.getElementById("gespeicherte-wochen")
  const name = select.value

  if (!name) {
    document.getElementById("status").textContent = "Bitte eine Woche auswählen."
    return
  }

  if (!confirm(`Woche "${name}" wirklich löschen?`)) {
    return
  }

  const wochen = getGespeicherteWochen()
  delete wochen[name]

  localStorage.setItem(getStorageKey("wochenplaene"), JSON.stringify(wochen))
  renderWochenDropdown()
  document.getElementById("status").textContent = "Woche gelöscht."
}

function handleKundeChange() {
  const kunde = getAktuellerKunde()
  setAktuellerKunde(kunde)

  gerichte = getGerichte()
  renderVorlagenDropdown()
  initialisiereDropdowns()
  renderWochenDropdown()
  updateDownloadButtons()
  updatePreviews()
}

window.addEventListener("DOMContentLoaded", () => {
  const kundeSelect = document.getElementById("kunde")
  const gespeicherterKunde = localStorage.getItem("aktuellerKunde") || "sorgundseitz"

  if (kundeSelect) {
    kundeSelect.value = gespeicherterKunde
  }

  gerichte = getGerichte()
  renderVorlagenDropdown()
  initialisiereDropdowns()

  updatePreisFeld("dienstag")
  updatePreisFeld("mittwoch")
  updatePreisFeld("donnerstag")
  updatePreisFeld("freitag")

  updatePreisFeld("druck-dienstag")
  updatePreisFeld("druck-mittwoch")
  updatePreisFeld("druck-donnerstag")
  updatePreisFeld("druck-freitag")

  updatePreisFeld("dienstag2")
  updatePreisFeld("mittwoch2")
  updatePreisFeld("donnerstag2")
  updatePreisFeld("freitag2")

  updateDownloadButtons()
  updateVorlageBereiche()
  updatePreviewBereiche()
  updatePreviews()
})