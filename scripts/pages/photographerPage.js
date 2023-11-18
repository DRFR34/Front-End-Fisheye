//== get the photographer id with URL 

/**
 * window.location.search  :  * @returns {String} - query part of the URL
 * 
 * urlParams.get('id') : @returns {String} or { null}
 */
const urlSearch = window.location.search;
const urlParams = new URLSearchParams(urlSearch);
const urlId = urlParams.get('id');  

//== visual improvement if key navigation with class keyboardFocus (CSS)  

document.body.addEventListener('keydown', function() {
    document.body.classList.add('keyboardFocus');
  });
  
  document.body.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboardFocus');
    sortingDropdown.classList.remove('sortingDropdownIsActive')
  });

//== functions 

/**
 * - fetches photographer data from a JSON file and inserts it into the DOM.
 * @async
 * @function getPhotographersData
 * @throws - throw an error if the fetch operation fails.
 */
async function getPhotographersData() {
    try {
        const response = await fetch("./data/all_data.json");
        const allJsonData = await response.json();
        selectAndInsertPhotographerInDom(allJsonData.photographers);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }          
}


/**
 * - selects medias in photographer[] if match with photographer's ID and inserts them into the DOM.
 * @function selectAndInsertMediasInDom
 * @param {Array} photographers - array of photographers data.
 * @param {media} object - element of medias
 * @throws {Error} Will throw an error if the creation of the photographerBanner fails.
 * } 
 */
function selectAndInsertPhotographerInDom(photographers) {
    const photographersSection = document.querySelector(".photographerHeader");
    photographers.forEach((photographer) => {
        if (photographer.id == urlId) {
            try {const photographerBanner = createPhotographerBanner(photographer);
            photographersSection.appendChild(photographerBanner);
            } catch (error) {
                console.error(error);
            }
        }
    });
}   

/**
 * - fetches media data from  JSON  
 * - send fetched medias to selectAndInsertMediasInDom() 
 * @async
 * @function getMediasData
 * @throws Will throw an error if the fetch operation fails.
 */
async function getMediasData() {
    try {
        const response = await fetch("./data/all_data.json");
        const allJsonData = await response.json();
        selectAndInsertMediasInDom(allJsonData.media);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}

/**
 * - selects medias in media[] if match with photographer's ID and inserts them into the DOM.
 *  - calls : calcTotalOfLikes() ,  voteWithLikes() 
 * @function selectAndInsertMediasInDom
 * @param {Array} medias - array of media objects to be displayed.
 * @param {media} object - element of medias
 * @throws {Error} Will throw an error if the creation of the media card fails.
 * } 
 */
function selectAndInsertMediasInDom(medias) {
    const mediaDisplayGrid = document.querySelector("#mediaDisplayGrid");
    medias.forEach((media) => {
        if (media.photographerId == urlId) {
            try {
                const mediaCard = MediaFactory.createMediaCard(media);
                mediaDisplayGrid.appendChild(mediaCard);  
            } catch (error) {
                console.error(error);
            }
        }
    });
    calcTotalOfLikes();
    voteWithLikes();
}

//== init 

getPhotographersData();
getMediasData();