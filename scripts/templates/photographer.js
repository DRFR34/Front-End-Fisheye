function indexPagePhotographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id} = data;

    const picture = `./assets/fisheye_photos/sample_photos/photographers_id_photos/${portrait}`;

    // création des cartes des photographes

    function createPhotographerCard() {
        // création de l'article
        const photographerArticle = document.createElement( 'article' );
        photographerArticle.className='photographerArticle'
        //ajout d'un lien (contenant le portrait et le nom)
        const photographerPageLink = document.createElement( 'a' );
        photographerPageLink.className = 'photographerPageLink'
        photographerPageLink.setAttribute('href', `./photographer_page.html?id=${id}`);
        photographerPageLink.setAttribute('alt','lien vers la page du photographe');
        
        
        // portrait : ajout d'un conteneur image + img

        const portraitBox = document.createElement('div');
        portraitBox.className = 'portraitBox';

        const photographerPortrait = document.createElement( 'img' );
        photographerPortrait.setAttribute("src", picture);
        photographerPortrait.className = 'photographerPortrait'
       
        //  name (prénom + nom)
        const photographerName = document.createElement( 'h2' );
        photographerName.textContent = name;
        photographerName.className ='photographerName'

        // ville, pays
        const photographerLocation = document.createElement( 'p' );
        photographerLocation.className = 'photographerLocation';
        photographerLocation.textContent = `${city}, ${country}`; 
        
        // Slogan
        const photographerTagline = document.createElement( 'p' );
        photographerTagline.className = 'photographerTagline';
        photographerTagline.innerText = `${tagline}`;

        // tarif
        const photographerPrice = document.createElement( 'p' );
        photographerPrice.className ='photographerPrice';
        photographerPrice.innerText = `${price}€/jour`;

        // création de la branche du DOM

        portraitBox.appendChild(photographerPortrait);
        photographerPageLink.appendChild(portraitBox);
        photographerPageLink.appendChild(photographerName);
        photographerArticle.appendChild(photographerPageLink);
        photographerArticle.appendChild(photographerLocation);
        photographerArticle.appendChild(photographerTagline);
        photographerArticle.appendChild(photographerPrice);
        
        return (photographerArticle);
    }

    return { name, picture, createPhotographerCard }
}
function photographerPagePhotographerTemplate(data) {
    const { name, portrait, city, country, tagline, price} = data;

   //  equivalent à cf Emeric const data ={ name: name, ...};

    const picture = `./assets/fisheye_photos/sample_photos/photographers_id_photos/${portrait}`;

    // création des cartes des photographes

    function createPhotographerCard() {
        // création de l'article
        const photographerArticle = document.createElement( 'article' );
        photographerArticle.className='photographerArticle';
        //ajout d'un lien (contenant le portrait et le nom)
        // const photographerPageLink = document.createElement( 'a' );
        // photographerPageLink.className = 'photographerPageLink'
        // photographerPageLink.setAttribute('href', `./photographer_page.html?id=${id}`);
        // photographerPageLink.setAttribute('alt','lien vers la page du photographe');
        
        // ajout du conteneur flottant dans main
        const main= document.querySelector('main');
        const photographerInfoBox = document.createElement('div');
        photographerInfoBox.className = 'photographerInfoBox';

        // tarif
        const photographerPrice = document.createElement( 'p' );
        photographerPrice.className ='photographerPrice';
        photographerPrice.innerText = `${price}€/jour`;

        // insertion dans DOM
        photographerInfoBox.appendChild(photographerPrice);
        main.appendChild(photographerInfoBox);

        // ajout d'un conteneur pour les textes
        const textsContentBox = document.createElement('div');
        textsContentBox.className = 'textsContentBox';
        
        // portrait : ajout d'un conteneur image + img

        const portraitBox = document.createElement('div');
        portraitBox.className = 'portraitBox';

        const photographerPortrait = document.createElement( 'img' );
        photographerPortrait.setAttribute("src", picture);
        photographerPortrait.className = 'photographerPortrait'
       
        //  name (prénom + nom)
        const photographerName = document.createElement( 'h2' );
        photographerName.textContent = name;
        photographerName.className ='photographerName'

        // ville, pays
        const photographerLocation = document.createElement( 'p' );
        photographerLocation.className = 'photographerLocation';
        photographerLocation.textContent = `${city}, ${country}`; 
        
        // Slogan
        const photographerTagline = document.createElement( 'p' );
        photographerTagline.className = 'photographerTagline';
        photographerTagline.innerText = `${tagline}`;

        // création de la branche du DOM

        portraitBox.appendChild(photographerPortrait);
        // photographerPageLink.appendChild(portraitBox);
        // photographerPageLink.appendChild(photographerName);
        // photographerArticle.appendChild(photographerPageLink);

        textsContentBox.appendChild(photographerName);
        textsContentBox.appendChild(photographerLocation);
        textsContentBox.appendChild(photographerTagline);
        photographerArticle.appendChild(textsContentBox);
        photographerArticle.appendChild(portraitBox);    
        // photographerArticle.appendChild(photographerPrice);
        
        return (photographerArticle);
    }

    return { name, picture, createPhotographerCard }

}