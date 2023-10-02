function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price} = data;

    const picture = `./assets/fisheye_photos/sample_photos/photographers_id_photos/${portrait}`;

    // création des cartes des photographes

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        //!ajout d'un lien
        //! ajout d'un conteneur image
        const portraitBox = document.createElement('div');
        portraitBox.className = 'portraitBox';
        // portrait
        const photographerPortrait = document.createElement( 'img' );
        photographerPortrait.setAttribute("src", picture);
        photographerPortrait.className = 'photographerPortrait'
        //  name (prénom + nom)
        const photographerName = document.createElement( 'h2' );
        photographerName.textContent = name;
        photographerName.className ='photographerName'

        const photographerLocation = document.createElement( 'p' );
        photographerLocation.className = 'photographerLocation';
        photographerLocation.textContent = `${city}, ${country}`; 

        const photographerTagline = document.createElement( 'p' );
        photographerTagline.className = 'photographerTagline';
        photographerTagline.innerText = `${tagline}`;

        const photographerPrice = document.createElement( 'p' );
        photographerPrice.className ='photographerPrice';
        photographerPrice.innerText = `${price}€/jour`;
        portraitBox.appendChild(photographerPortrait);
        article.appendChild(portraitBox);
        article.appendChild(photographerName);
        article.appendChild(photographerLocation);
        article.appendChild(photographerTagline);
        article.appendChild(photographerPrice);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}