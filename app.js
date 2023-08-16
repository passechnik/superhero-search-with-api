document.addEventListener('DOMContentLoaded', () => {
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
        const totalPages = 5;
    
        for (let pageNo = 0; pageNo <= totalPages; pageNo++) {
            const characters = await fetchCharacters(pageNo);
    
            characters.forEach(character => {
                const characterElement = document.createElement('div');
                characterElement.classList.add('character');
    
                const nameElement = document.createElement('h2');
                nameElement.textContent = character.name;
    
                const imageElement = document.createElement('img');
                imageElement.src = character.image_url;
                imageElement.alt = character.name;
    
                characterElement.appendChild(nameElement);
                characterElement.appendChild(imageElement);
    
                container.appendChild(characterElement);
            });
    
            // Process and display characters as needed
            // characters.forEach(character => {
            //     console.log(character.name);
                // Display other character information on your webpage
            // });
        }
    }
    
    // Call the function to start fetching and displaying characters
    displayCharacters();
});