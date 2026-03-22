const kunden = {

  sorgundseitz: {
    name: "Metzgerei Sorg & Seitz",
    layouts: ["mittagstisch", "catering"]
  },

  schilling: {
    name: "Motorrad Schilling",
    layouts: ["event"]
  },

  erkenbrecher: {
    name: "Schreinerei Erkenbrecher",
    layouts: ["referenzen"]
  }

}


const kundenLayouts = {
  sorgundseitz: {

    mittagstisch_instagram: {
      feed: {
        template: "templates/klassisch-feed.jpg",
        width: 1080,
        height: 1350,
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
        template: "templates/klassisch-story.jpg",
        width: 1080,
        height: 1920,
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
    },

    mittagstisch_druck: {
      front: {
        template: "templates/mittagstisch-print-front.jpg",
        width: 3508,
        height: 2480,
        datum: {
          x: 1754,
          y: 320,
          fontSize: 110
        }
      },

      back: {
        template: "templates/mittagstisch-print-back.jpg",
        width: 3508,
        height: 2480,

        links: {
          woche: { x: 875, y: 220, fontSize: 72 },
          meals: {
            dienstag: {
              imageX: 430, imageY: 720, imageRadius: 160,
              textX: 430, textY: 920, textMaxWidth: 420, textLineHeight: 54,
              priceX: 430, priceY: 1180, priceColor: "#ffffff",
              textFontSize: 56, priceFontSize: 60
            },
            mittwoch: {
              imageX: 1240, imageY: 720, imageRadius: 160,
              textX: 1240, textY: 920, textMaxWidth: 420, textLineHeight: 54,
              priceX: 1240, priceY: 1180, priceColor: "#2f2f2f",
              textFontSize: 56, priceFontSize: 60
            },
            donnerstag: {
              imageX: 430, imageY: 1590, imageRadius: 160,
              textX: 430, textY: 1790, textMaxWidth: 420, textLineHeight: 54,
              priceX: 430, priceY: 2050, priceColor: "#2f2f2f",
              textFontSize: 56, priceFontSize: 60
            },
            freitag: {
              imageX: 1240, imageY: 1590, imageRadius: 160,
              textX: 1240, textY: 1790, textMaxWidth: 420, textLineHeight: 54,
              priceX: 1240, priceY: 2050, priceColor: "#ffffff",
              textFontSize: 56, priceFontSize: 60
            }
          }
        },

        rechts: {
          woche: { x: 2630, y: 220, fontSize: 72 },
          meals: {
            dienstag: {
              imageX: 2190, imageY: 720, imageRadius: 160,
              textX: 2190, textY: 920, textMaxWidth: 420, textLineHeight: 54,
              priceX: 2190, priceY: 1180, priceColor: "#ffffff",
              textFontSize: 56, priceFontSize: 60
            },
            mittwoch: {
              imageX: 3000, imageY: 720, imageRadius: 160,
              textX: 3000, textY: 920, textMaxWidth: 420, textLineHeight: 54,
              priceX: 3000, priceY: 1180, priceColor: "#2f2f2f",
              textFontSize: 56, priceFontSize: 60
            },
            donnerstag: {
              imageX: 2190, imageY: 1590, imageRadius: 160,
              textX: 2190, textY: 1790, textMaxWidth: 420, textLineHeight: 54,
              priceX: 2190, priceY: 2050, priceColor: "#2f2f2f",
              textFontSize: 56, priceFontSize: 60
            },
            freitag: {
              imageX: 3000, imageY: 1590, imageRadius: 160,
              textX: 3000, textY: 1790, textMaxWidth: 420, textLineHeight: 54,
              priceX: 3000, priceY: 2050, priceColor: "#ffffff",
              textFontSize: 56, priceFontSize: 60
            }
          }
        }
      }
    }

  }
}

const generatorVorlagen = {
  sorgundseitz: {
    mittagstisch_instagram: {
      name: "Mittagstisch Instagram",
      layout: "mittagstisch_instagram",
      formats: ["story", "feed"]
    },
    mittagstisch_druck: {
      name: "Mittagstisch A4 Druck",
      layout: "mittagstisch_druck",
      formats: ["front", "back"]
    }
  },

  schilling: {},

  erkenbrecher: {}
}
