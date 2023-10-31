// récupération de l'id du photographe dans l'URL
const urlSearch = window.location.search;

const urlParams = new URLSearchParams(urlSearch);

const urlId = urlParams.get('id');


async function getPhotographersData() {
    try {
        const response = await fetch("./data/all_data.json");
        const allJsonData = await response.json();
        selectAndInsertPhotographerInDom(allJsonData.photographers);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}
getPhotographersData();


// let totalOfLikes;

function selectAndInsertPhotographerInDom(photographers) {
    const photographersSection = document.querySelector(".photographerHeader");
    photographers.forEach((photographer) => {
        if (photographer.id == urlId) {
            const photographerBanner = createPhotographerBanner(photographer);
            photographersSection.appendChild(photographerBanner);
        }
    });
}   



// async function getMediasData(){const response = await fetch('....'); }

async function getMediasData() {
    try {
        const response = await fetch("./data/all_data.json");
        const allJsonData = await response.json();
        selectAndInsertMediaInDom(allJsonData.media);

    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}
getMediasData();


function selectAndInsertMediaInDom(media) {
    const mediaDisplayGrid = document.querySelector("#mediaDisplayGrid");
    media.forEach((medium) => {
        if (medium.photographerId == urlId) {
            try {
                const mediaCard = MediaFactory.createMediaCard(medium);
                mediaDisplayGrid.appendChild(mediaCard);                

            } catch (error) {
                console.error(error);
            }
        }
    });
}
