// récupération de l'id du photographe dans l'URL
const urlSearch = window.location.search;
        // console.log(urlSearch); 
const  urlParams = new URLSearchParams(urlSearch);
        console.log(urlParams.values());
const urlId = urlParams.get('id');
        console.log(urlId);

// Récupère les datas JSON concernant les photographes (Array "photographers" + Arry media)
// async function getPhotoraphersData() {


//     fetch("./data/all_data.json")
    
//         .then((response) => {
//             return response.json()
//         })
//         .then((allJsonData) => {
//             displayData(allJsonData.photographers, allJsonData.media);
//         })
// };   
// getPhotoraphersData();

// async function displayData(photographers) {
//     const photographersSection = document.querySelector(".photographerHeader");
//     photographers.forEach((photographer) => {
//         if (photographer.id == urlId) {
//         // photographerName = photographer.name;
//         // console.log("photographerName: ", photographerName);
//         const photographerBanner = createPhotographerBanner(photographer);
//         photographersSection.appendChild(photographerBanner); 
//         }        
//     });
// }


// Récupère les datas JSON concernant les medias (Array "media")
// async function getMediasData() {


//     fetch("./data/all_data.json")
    
//         .then((response) => {
//             return response.json()
//         })
//         .then((allJsonData) => {
//             displayData(allJsonData.media, allJsonData.photographers);
//         })
       
// };
// getMediasData();

// async function displayData(media) {
//     media.forEach(
//         (medium) => {                
//         if (medium.photographerId == urlId) {
//             if (medium.image){
//                 const photoCard = createPhotoCard(medium);
//                 mediaDisplayGrid.appendChild(photoCard); }  
//             }       
//             if (medium.video){
//                 const videoCard = createVideoCard(medium);
//                 mediaDisplayGrid.appendChild(videoCard);  
//             }       
//         });     
    
// }
async function getPhotoraphersData() {
    fetch("./data/all_data.json")
        .then((response) => {
            return response.json()
        })
        .then((allJsonData) => {
            displayPhotographers(allJsonData.photographers);
        })
};   
getPhotoraphersData();

async function displayPhotographers(photographers) {
    const photographersSection = document.querySelector(".photographerHeader");
    photographers.forEach((photographer) => {
        if (photographer.id == urlId) {
            const photographerBanner = createPhotographerBanner(photographer);
            photographersSection.appendChild(photographerBanner); 
        }        
    });
}

async function getMediasData() {
    fetch("./data/all_data.json")
        .then((response) => {
            return response.json()
        })
        .then((allJsonData) => {
            displayMediaFactory(allJsonData.media);
        })       
};
getMediasData();

async function displayMediaFactory(media) {
    const mediaDisplayGrid = document.querySelector("#mediaDisplayGrid");
    media.forEach((medium) =>     {               
        if (medium.photographerId == urlId) {
            if (medium.image){
                const photoCard = createPhotoCard(medium);
                mediaDisplayGrid.appendChild(photoCard); 
            }  
            if (medium.video){
                const videoCard = createVideoCard(medium);
                mediaDisplayGrid.appendChild(videoCard);  
            }       
        }     
    });
}


// async function calcTotalLikes(media) {
//     let totalOfLikes = 0;
//     // const {photographerId,  likes} = dataLikes;
//     media.forEach (medium) => {
//         if (medialikes.photographerId == urlId) {
//             totalOfLikes += likes;
//         }
//     }
//      console.log("totalOfLikes : ", totalOfLikes);
//  return totalOfLikes; 
    
// }


