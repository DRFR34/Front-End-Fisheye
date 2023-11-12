//== visual improvement if key navigation with class keyboardFocus (CSS)  
document.body.addEventListener('keydown', function() {
    document.body.classList.add('keyboardFocus');
  });
  
  document.body.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboardFocus');
  });

//== functions
//-- get array "photographers" in JSON
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
    
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographersSection");
    photographers.forEach((photographer) => {        
        const userCardDOM = createPhotographerCard(photographer);
        photographersSection.appendChild(userCardDOM);
    });
}
