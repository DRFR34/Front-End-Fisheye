    //!
    // async function getPhotographers() {
    //     // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    //     // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    //     // // let photographers = [
    //     // //     {
    //     // //         "name": "Ma data test",
    //     // //         "id": 1,
    //     // //         "city": "Paris",
    //     // //         "country": "France",
    //     // //         "tagline": "Ceci est ma data test",
    //     // //         "price": 400,
    //     // //         "portrait": "account.png"
    //     // //     },
    //     // //     {
    //     // //         "name": "Autre data test",
    //     // //         "id": 2,
    //     // //         "city": "Londres",
    //     // //         "country": "UK",
    //     // //         "tagline": "Ceci est ma data test 2",
    //     // //         "price": 500,
    //     // //         "portrait": "account.png"
    //     // //     },
    //     // // ]

    //     const photographersFile = await fetch ("./data/photographers.json");
    //     const photographers = await photographersFile;

    //     photographers.photographer.forEach(PhotographerInfos => {

    //     })


    //     // et bien retourner le tableau photographers seulement une fois récupéré
        
    //      // Retourner la constante photographers sous forme de tableau (retrait des : ,...photographers en trop car nous voulons qu'un seul tableau)
    //     // syntaxe ... (= Spread Operator = opérateur de décomposition) permet de récupérer chaque élément de l'objet photographers.Comme il est entre crochet il renvoi un tableau.
    //     return ({
    //         //! photographers: [...photographers, ...photographers, ...photographers]})
       
       
    //         photographers: [...photographers]})
    // }

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographersSection");

    photographers.forEach((photographer) => {
        const photographerModel = indexPagePhotographerTemplate(photographer);
        const userCardDOM = photographerModel.createPhotographerCard();
        photographersSection.appendChild(userCardDOM);
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
    
