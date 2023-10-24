

 function createPhotographerCard(data) {
    // destructuration
    const { name, portrait, city, country, tagline, price, id} = data;
    const photographerArticle = document.createElement( 'article' );
    photographerArticle.className='photographerArticle'
    photographerArticle.innerHTML = `            
        <a class="photographerPageLink" href="./photographer_page.html?id=${id}" >
            <div class="portraitBox">
                <img src="./assets/fisheye_photos/sample_photos/photographers_id_photos/${portrait}" class="photographerPortrait">
            </div>
            <h2 class="photographerName">${name}</h2>
        </a>
        <p class="photographerLocation">${city}, ${country}</p>
        <p class="photographerTagline">${tagline}</p>
        <p class="photographerPrice">${price}€/jour</p>            
    `;      
    
    return photographerArticle;
}


 function createPhotographerBanner(data) {
    // destructuration
    const { name, portrait, city, country, tagline, price} = data;

    // création de l'article
    const photographerBanner = document.createElement( 'div' );
    photographerBanner.className='photographerBanner';
    photographerBanner.innerHTML = `
        <div class="textsContentBox">
            <h1 class="photographerName">${name}</h1>
            <p class="photographerLocation">${city}, ${country}</p>
            <p class="photographerTagline">${tagline}</p>
        </div>
        <div class="portraitBox">
                <img src="./assets/fisheye_photos/sample_photos/photographers_id_photos/${portrait}" class="photographerPortrait">
        </div>    
    `;
    priceBox.innerHTML = `${price}`;
    return photographerBanner;
    
}




