// Récupère les datas JSON concernant les photographes (Array "photographers") 
async function getPhotographersData() {   
    fetch("./data/all_data.json")    
        .then((response) => {
            return response.json()
        })
        .then((allJsonData) => {
            displayData(allJsonData.photographers);
        })
};
    
getPhotographersData();
    
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographersSection");

    // photographers.forEach((photographer) => {
    //     const photographerModel = indexPagePhotographerTemplate(photographer);
    //     const userCardDOM = photographerModel.createPhotographerCard();
    //     photographersSection.appendChild(userCardDOM);
    photographers.forEach((photographer) => {
        
        const userCardDOM = createPhotographerCard(photographer);
        photographersSection.appendChild(userCardDOM);
    });
}