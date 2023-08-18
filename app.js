const imageMapping = {
    1: '/images/ironman.jpg',
    2: '/images/captainamerica.jpg',
    3: '/images/thor.jpg',
    4: '/images/blackwidow.jpg',
    5: '/images/hulk.jpg',
    6: '/images/hawkeye.jpg',
    7: '/images/spiderman.jpg',
    8: '/images/blackpantera.jpg',
    9: '/images/doctorstrange.jpg',
    10: '/images/wanda.jpg',
    11: '/images/vision.jpg',
    12: '/images/antman.jpg',
    13: '/images/wasp.jpg',
    14: '/images/captainmarvel.jpg',
    15: '/images/starlord.jpg',
    16: '/images/gamora.jpg',
    17: '/images/drax.jpg',
    18: '/images/racoon.jpg',
    19: '/images/groot.jpg',
    20: '/images/nebula.jpg',
    21: '/images/thanos.jpg',
    22: '/images/loki.jpg',
    23: '/images/wintersoldier.jpg',
    24: '/images/falcon.jpg',
    25: '/images/warmachine.jpg',
    26: '/images/nickfury.jpg',
    27: '/images/coulson.jpg',
    28: '/images/peggycarter.jpg',
    29: '/images/valkyria.jpg',
    30: '/images/okoeye.jpg',
}

    async function fetchCharacters(pageNo) {
        const apiKey = '95d73441f5msh110af27d713bf7ep1564e0jsn21dbe9dede91';
        const apiUrl = `https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/characters?pageNo=${pageNo}`;
    
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com',
                'X-RapidAPI-Key': apiKey
            }
        });
    
        const data = await response.json();
        return data;
    }
    
    async function displayCharacters() {
        const container = document.getElementById('characters-container');
        container.innerHTML = '';
        const totalPages = 5;
    
        for (let pageNo = 1; pageNo <= totalPages; pageNo++) {
            const characters = await fetchCharacters(pageNo);

            console.log(`Page ${pageNo + 1}, Characters:`, characters);
    
            characters.forEach(character => {
                const characterElement = document.createElement('div');
                characterElement.classList.add('character');
    
                const nameElement = document.createElement('h2');
                nameElement.textContent = character.name;
    
                const imageElement = document.createElement('img');
                imageElement.src = imageMapping[character.id];
                imageElement.alt = character.name;

                const heroPoster = document.createElement('div')
                heroPoster.classList.add('hero__poster')

                const heroPosterFill = document.createElement('span')
                heroPosterFill.classList.add('hero__poster--fill')
                heroPosterFill.appendChild(imageElement.cloneNode())
                
                const heroPosterFeatured = document.createElement('span')
                heroPosterFeatured.classList.add('hero__poster--featured')
                heroPosterFeatured.appendChild(imageElement.cloneNode())

                //append everything in the character div
                characterElement.appendChild(nameElement);
                characterElement.appendChild(heroPoster)
                heroPoster.appendChild(heroPosterFill)
                heroPoster.appendChild(heroPosterFeatured)

                container.appendChild(characterElement)

            });
        }
    }
    
    // call the function to start fetching and displaying characters
    displayCharacters();