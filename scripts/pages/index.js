//== visual improvement if key navigation with class keyboardFocus (CSS)  
document.body.addEventListener('keydown', function() {
    document.body.classList.add('keyboardFocus');
  });
  
  document.body.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboardFocus');
  });

//== functions

//-- get array "photographers" in JSON


/**
 * - fetches data from a JSON file (Asynchronous)
 * - calls displayData() with the photographers data.Description placeholder
 * @async
 * @throws {Error} - If fetching fails
 */
async function getPhotographersData() {
    try {
        const response = await fetch("./data/all_data.json");
        const allJsonData = await response.json();
        displayData(allJsonData.photographers);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}


getPhotographersData();

/**
 * - displays photographers data (Asynchronous)
 * - creates a photographer card for each photographer and appends it to the photographers section.
 * @async
 * @param {Array} photographers - array of Objects photographers data.
 * @param {Object} photographer - element of array photographers
 * @returns {HTMLElement} userCardDOM - DOM element
 * 
 */
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographersSection");
    photographers.forEach((photographer) => {        
        const userCardDOM = createPhotographerCard(photographer);
        photographersSection.appendChild(userCardDOM);
    });
}


