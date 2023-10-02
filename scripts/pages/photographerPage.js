//Mettre le code JavaScript lié à la page photographer.html


// récupération de l'id du photographe dans l'URL
const urlSearch = window.location.search;
        console.log(urlSearch); // => "?id=XXX"

// suppression des 4 premiers caractères superflus
// const urlId = urlSearch.slice(4);
// console.log(urlId); // => "XXX"

// Emeric ,
const  xx = new URLSearchParams(urlSearch);
console.log(xx.values());
const urlId = xx.get('id');
console.log(urlId);







async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographerHeader");

    photographers.forEach((photographer) => {
        if (photographer.id == urlId) {
           const photographerModel = photographerPagePhotographerTemplate(photographer);
        const photographerCard = photographerModel.createPhotographerCard();
        photographersSection.appendChild(photographerCard); 
    }
        
    });
}
async function init() {
    // Récupère les datas JSON concernant les photographes (Array "photographers")

    fetch("./data/all_data.json")
    
        .then((response) => {
            return response.json()
        })
        .then((allJsonData) => {
            displayData(allJsonData.photographers);
        })
};
    
init();
