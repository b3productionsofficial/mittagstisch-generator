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
        woche: { x: 630, y: 180, fontSize: 54 },
        meals: {
          dienstag: {
            imageX: 314, imageY: 469, imageRadius: 82,
            textX: 314, textY: 640, textMaxWidth: 360, textLineHeight: 30,
            priceX: 315, priceY: 762, priceColor: "#ffffff",
            textFontSize: 28, priceFontSize: 30
          },
          mittwoch: {
            imageX: 767, imageY: 479, imageRadius: 82,
            textX: 772, textY: 640, textMaxWidth: 360, textLineHeight: 30,
            priceX: 772, priceY: 762, priceColor: "#2f2f2f",
            textFontSize: 28, priceFontSize: 30
          },
          donnerstag: {
            imageX: 315, imageY: 894, imageRadius: 82,
            textX: 315, textY: 1070, textMaxWidth: 360, textLineHeight: 30,
            priceX: 315, priceY: 1188, priceColor: "#2f2f2f",
            textFontSize: 28, priceFontSize: 30
          },
          freitag: {
            imageX: 767, imageY: 893, imageRadius: 82,
            textX: 770, textY: 1070, textMaxWidth: 360, textLineHeight: 30,
            priceX: 768, priceY: 1188, priceColor: "#ffffff",
            textFontSize: 28, priceFontSize: 30
          }
        }
      },

      story: {
        template: "templates/klassisch-story.jpg",
        width: 1080,
        height: 1920,
        woche: { x: 660, y: 310, fontSize: 65 },
        meals: {
          dienstag: {
            imageX: 300, imageY: 712, imageRadius: 105,
            textX: 300, textY: 935, textMaxWidth: 400, textLineHeight: 30,
            priceX: 300, priceY: 1087, priceColor: "#ffffff",
            textFontSize: 32, priceFontSize: 32
          },
          mittwoch: {
            imageX: 805, imageY: 711, imageRadius: 105,
            textX: 810, textY: 935, textMaxWidth: 400, textLineHeight: 30,
            priceX: 810, priceY: 1085, priceColor: "#2f2f2f",
            textFontSize: 32, priceFontSize: 32
          },
          donnerstag: {
            imageX: 300, imageY: 1275, imageRadius: 105,
            textX: 300, textY: 1500, textMaxWidth: 400, textLineHeight: 30,
            priceX: 300, priceY: 1650, priceColor: "#2f2f2f",
            textFontSize: 32, priceFontSize: 32
          },
          freitag: {
            imageX: 805, imageY: 1275, imageRadius: 105,
            textX: 810, textY: 1500, textMaxWidth: 400, textLineHeight: 30,
            priceX: 810, priceY: 1650, priceColor: "#ffffff",
            textFontSize: 32, priceFontSize: 32
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
          x: 2920,
          y: 350,
          fontSize: 100
        }
      },

      back: {
        template: "templates/mittagstisch-print-back.jpg",
        width: 3508,
        height: 2480,

        links: {
          woche: { x: 990, y: 250, fontSize: 90 },
          meals: {
            dienstag: {
              imageX: 477, imageY: 540, imageRadius: 145,
              textX: 475, textY: 880, textMaxWidth: 420, textLineHeight: 54,
              priceX: 475, priceY: 1120, priceColor: "#ffffff",
              textFontSize: 56, priceFontSize: 60
            },
            mittwoch: {
              imageX: 1310, imageY: 540, imageRadius: 145,
              textX: 1310, textY: 880, textMaxWidth: 420, textLineHeight: 54,
              priceX: 1315, priceY: 1120, priceColor: "#2f2f2f",
              textFontSize: 56, priceFontSize: 60
            },
            donnerstag: {
              imageX: 477, imageY: 1335, imageRadius: 145,
              textX: 475, textY: 1700, textMaxWidth: 420, textLineHeight: 54,
              priceX: 475, priceY: 1970, priceColor: "#2f2f2f",
              textFontSize: 56, priceFontSize: 60
            },
            freitag: {
              imageX: 1310, imageY: 1335, imageRadius: 145,
              textX: 1310, textY: 1700, textMaxWidth: 420, textLineHeight: 54,
              priceX: 1240, priceY: 2050, priceColor: "#ffffff",
              textFontSize: 56, priceFontSize: 60
            }
          }
        },

        rechts: {
          woche: { x: 2750, y: 250, fontSize: 90 },
          meals: {
            dienstag: {
              imageX: 2184, imageY: 530, imageRadius: 145,
              textX: 2180, textY: 880, textMaxWidth: 420, textLineHeight: 54,
              priceX: 2180, priceY: 1125, priceColor: "#ffffff",
              textFontSize: 56, priceFontSize: 60
            },
            mittwoch: {
              imageX: 3007, imageY: 540, imageRadius: 145,
              textX: 3015, textY: 880, textMaxWidth: 420, textLineHeight: 54,
              priceX: 3020, priceY: 1125, priceColor: "#2f2f2f",
              textFontSize: 56, priceFontSize: 60
            },
            donnerstag: {
              imageX: 2190, imageY: 1335, imageRadius: 145,
              textX: 2190, textY: 1700, textMaxWidth: 420, textLineHeight: 54,
              priceX: 2180, priceY: 1970, priceColor: "#2f2f2f",
              textFontSize: 56, priceFontSize: 60
            },
            freitag: {
              imageX: 3025, imageY: 1335, imageRadius: 145,
              textX: 3015, textY: 1700, textMaxWidth: 420, textLineHeight: 54,
              priceX: 3020, priceY: 1970, priceColor: "#ffffff",
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
