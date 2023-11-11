

 function createPhotographerCard(data) {
    // destructuration
    const { name, portrait, city, country, tagline, price, id} = data;
    const photographerArticle = document.createElement( 'article' );
    photographerArticle.className='photographerArticle'
    photographerArticle.innerHTML = `            
        <a class="photographerPageLink" aria-label="Portrait de ${name} et lien vers sa page" href="./photographer_page.html?id=${id}" tabindex="0">
            <div class="portraitBox" >
                <img class="photographerPortrait" src="./assets/fisheye_photos/sample_photos/photographers_id_photos/${portrait}" alt="Portrait du, ou de la photographe" tabindex="-1">
            </div>
            <h2 class="photographerName" aria-label="Nom du photographe:${name}" tabindex="-1">${name}</h2>
        </a>
        <h4 class="photographerLocation" aria-label="Réside à ${city}, pays: ${country}" tabindex="0">${city}, ${country}</h4>
        <h4 class="photographerTagline" aria-label="Sa devise :${tagline}"  tabindex="0">${tagline}</h4>
        <h4 class="photographerPrice" aria-label="Tarif : ${price}€ par jour"  tabindex="0">${price}€/jour</h4>            
    `;      
    
    return photographerArticle;
}

 function createPhotographerBanner(data) {
    // destructuration
    const { id, name, portrait, city, country, tagline, price} = data;

    //  build article
    const photographerBanner = document.createElement( 'div' );
    photographerBanner.className='photographerBanner';
    photographerBanner.innerHTML = `
        <div id="textsContentBox"  class="textsContentBox">
            <h1 id="pagePhotographerName" class="photographerName" aria-label="Nom du photographe : ${name}" tabindex="0" >${name}</h1>
            <h4 class="photographerLocation" aria-label="Ville : ${city} , pays : ${country}" tabindex="0"> ${city}, ${country}</h4>
            <h4 class="photographerTagline" aria-label="slogan du photographe: ${tagline}" tabindex="0" aria-label="slogan du photographe:${tagline}">${tagline}</h4>            
        </div>       
        <button id="contactButton" class="contactButton" type="button" role="button" aria-labelledby = "span${id}">Contactez-moi</button>
        <span id="span${id}" class="invisible">Pour envoyer un message à ${name}, cliquer sur ce bouton </span>
    </section>
        <div class="portraitBox" tabindex="-1">
                <img class="photographerPortrait" role=""src="./assets/fisheye_photos/sample_photos/photographers_id_photos/${portrait}" alt="Portrait de ${name}" tabindex="0" >
        </div>    
    `;
    priceBox.innerHTML = `<span class="invisible">Le tarif de ${name} est de :</span> ${price}<span class="invisible">euros par jour</span>`;

    return photographerBanner;
    
}


