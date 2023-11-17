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
 * - fetches data from a JSON file and (Asynchronous)
 * - calls displayData() with the photographers data.
 * @returns {undefined} 
 */
async function getPhotographersData() {   
    fetch("./data/all_data.json")    
        .then((response) => {
            return response.json()
        })
        .then((allJsonData) => {
            displayData(allJsonData.photographers);
        })
}
    
getPhotographersData();

/**
 * - displays photographers data (Asynchronous)
 * - creates a photographer card for each photographer and appends it to the photographers section.
 * @param {Array} photographers - array of Objects photographers data.
 * @param {Object} photographer - array of photographers data.
 * @returns {Object} userCardDOM - DOM element
 * 
 */
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographersSection");
    photographers.forEach((photographer) => {        
        const userCardDOM = createPhotographerCard(photographer);
        photographersSection.appendChild(userCardDOM);
    });
}
