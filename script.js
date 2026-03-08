const gerichte = {

currywurst:{
bild:"gerichte/currywurst.jpg",
preis:"7,50 €",
text:"Currywurst mit Semmel"
},

cordonbleu:{
bild:"gerichte/cordonbleu.jpg",
preis:"8,50 €",
text:"Cordon Bleu mit Kartoffelsalat"
},

gulasch:{
bild:"gerichte/gulasch.jpg",
preis:"8,90 €",
text:"Gulasch mit Spätzle"
}

}

function generate(){

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const template = new Image()
template.src = "template.jpg"

template.onload = function(){

ctx.drawImage(template,0,0,1080,1080)

drawMeal(ctx,"dienstag",300,390)
drawMeal(ctx,"mittwoch",780,390)
drawMeal(ctx,"donnerstag",300,700)
drawMeal(ctx,"freitag",780,700)

const link = document.getElementById("download")
link.href = canvas.toDataURL()
link.download = "mittagstisch.png"
link.innerText = "Bild herunterladen"

}

}

function drawMeal(ctx,id,x,y){

const value = document.getElementById(id).value
const meal = gerichte[value]

const img = new Image()
img.src = meal.bild

img.onload = function(){

ctx.save()

ctx.beginPath()
ctx.arc(x,y,90,0,Math.PI*2)
ctx.closePath()
ctx.clip()

ctx.drawImage(img,x-90,y-90,180,180)

ctx.restore()

ctx.font="28px Arial"
ctx.fillStyle="#333"
ctx.textAlign="center"

ctx.fillText(meal.text,x,y+150)

ctx.font="26px Arial"
ctx.fillText(meal.preis,x,y+200)

}

}