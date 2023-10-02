function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price} = data;

    const picture = `./assets/fisheye_photos/sample_photos/photographers_id_photos/${portrait}`;

    // création des cartes des photographes

    function getUserCardDOM() {
        const photographerArticle = document.createElement( 'article' );

        //ajout d'un lien (contenant le portrait et le nom)
        const photographerPageLink = document.createElement( 'a' );
        photographerPageLink.className = 'photographerPageLink'
        photographerPageLink.setAttribute('href', './photographer_page.html');
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
        photographerPageLink.appendChild(portraitBox);
        photographerPageLink.appendChild(photographerName);
        portraitBox.appendChild(photographerPortrait);
        // photographerArticle.appendChild(portraitBox);
        // photographerArticle.appendChild(photographerName);
        photographerArticle.appendChild(photographerPageLink);
        photographerArticle.appendChild(photographerLocation);
        photographerArticle.appendChild(photographerTagline);
        photographerArticle.appendChild(photographerPrice);
        
        return (photographerArticle);
    }

    return { name, picture, getUserCardDOM }
}