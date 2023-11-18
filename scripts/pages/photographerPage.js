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
 * This asynchronous function fetches photographer data from a JSON file and inserts it into the DOM.
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
 * - displays the data of the photographer with ID = URL ID
 * - creates the photographer's banner and insert it in DOM
 * @param {Array} photographers - The array of photographers data.
 * @returns {void} This function does not return a value.
 */
function selectAndInsertPhotographerInDom(photographers) {
    const photographersSection = document.querySelector(".photographerHeader");
    photographers.forEach((photographer) => {
        if (photographer.id == urlId) {
            const photographerBanner = createPhotographerBanner(photographer);
            photographersSection.appendChild(photographerBanner);
        }
    });
}   

/**
 * - fetches media data from  JSON  and inserts it into the DOM.
 * @async
 * @function getMediasData
 * @throws Will throw an error if the fetch operation fails.
 */
async function getMediasData() {
    try {
        const response = await fetch("./data/all_data.json");
        const allJsonData = await response.json();
        selectAndInsertMediaInDom(allJsonData.media);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}


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
    calcTotalOfLikes();
    voteWithLikes();
}

//== init 

getPhotographersData();
getMediasData();