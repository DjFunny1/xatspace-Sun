        const mainContainer = document.getElementById('main-gif-container');
        const extraContainer = document.getElementById('extra-gif-container');
    
        // Lista de URLs de gifs (40 URLs diferentes para los 40 gifs)
        const gifUrls = [

            // GIRLS //

            ' https://i.postimg.cc/XvdRcM1b/sun-121.gif ', // 1

            ' https://i.postimg.cc/26fsPWYL/sun-115.gif ', // 2

            ' https://i.postimg.cc/6QnQct6W/sun-113.gif ', // 3

            ' https://i.postimg.cc/qR2CN26G/sun-111.gif ', // 4

            ' https://i.postimg.cc/0yKFKNZN/sun-106.gif ', // 5

            ' https://i.postimg.cc/tT5K5mLv/sun-100.gif ', // 6

            ' https://i.postimg.cc/qRhw2d2j/sun-95.gif ',  // 7

            ' https://i.postimg.cc/Prs0qLTN/sun-91.gif ',  // 8

            ' https://i.postimg.cc/Bnvr2Xm4/sun-87.gif ',  // 9

            ' https://i.postimg.cc/2ShNKm9w/sun-79.gif ',  // 10

            ' https://i.postimg.cc/Vkn3c9mK/Sun-38.gif ',  // 11

            ' https://i.postimg.cc/4xmGQwtw/Sun-50.gif ',  // 12

            ' https://i.postimg.cc/XqsMGnpX/Sun-49.gif ',  // 13

            ' https://i.postimg.cc/zGYQvH6g/sun-68.gif ',  // 14

            ' https://i.postimg.cc/bNnz4b1D/sun-69.gif ',  // 15

            // BOYS //

            ' https://i.postimg.cc/Z5R0RVnm/sun-98.gif ',  // 16

            ' https://i.postimg.cc/R0tj0Pc2/sun-87.gif ',  // 17

            ' https://i.postimg.cc/tRScsxQF/sun-88.gif ',  // 18

            ' https://i.postimg.cc/tTh6DRB4/sun-84.gif ',  // 19

            ' https://i.postimg.cc/pVfNQQCf/sun-82.gif ',  // 20

            ' https://i.postimg.cc/G2HRj1Zf/sun-80.gif ',  // 21

            ' https://i.postimg.cc/ZY77Smtn/sun-77.gif ',  // 22

            ' https://i.postimg.cc/C142DnQs/sun-76.gif ',  // 23

            ' https://i.postimg.cc/CKdWrHpx/sun-71.gif ',  // 24
            
            ' https://i.postimg.cc/fb2Vgv9r/Sun-43.gif ',  // 25

            ' https://i.postimg.cc/VNm0pTT4/Sun-16.gif ',  // 26

            ' https://i.postimg.cc/Bvs9DW7T/Sun-34.gif ',  // 27

            ' https://i.postimg.cc/3N6bb3by/Sun-11.gif ',  // 28

            ' https://i.postimg.cc/w3YjJRYF/Sun-17.gif ',  // 29

            ' https://i.postimg.cc/cJsThK49/Sun-13.gif ',  // 30

        ];

        function createGifCard(index, gifUrl) {
            const card = document.createElement('div');
            card.classList.add('gif-card');
            card.innerHTML = `
                <div class="gif-inner">
                    <div class="gif-front">
                        <img src="${gifUrl}" alt="Gif ${index + 1}">
                    </div>
                    <div class="gif-back">
                        ${index + 1}
                    </div>
                </div>
            `;
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
            return card;
        }

        // Generar 30 gifs para el contenedor principal (5x6)
        for (let i = 0; i < 15; i++) {
            mainContainer.appendChild(createGifCard(i, gifUrls[i]));
        }

        // Generar 10 gifs para el contenedor secundario (5x2)
        for (let i = 15; i < 30; i++) {
            extraContainer.appendChild(createGifCard(i, gifUrls[i]));
        }

        const moreGirls = () => {
            parent.open("https://postimg.cc/gallery/qpWtjQz");
        }
        const moreBoys = () => {
            parent.open("https://postimg.cc/gallery/Mq650ZQ");
        }
