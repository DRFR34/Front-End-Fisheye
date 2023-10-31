function sortMediasCards(){

    // Sélection du menu déroulant
    const SortingDropdown = document.querySelector('#SortingDropdown');

    // Ajout d'un listener de clics
    SortingDropdown.addEventListener('click', (event) => {
        // option sélectionnée
        const clickedOption = event.target;

    
        // Déplace l'option sélectionnée en premier enfant
        clickedOption.parentElement.prepend(clickedOption);

        // Sélection de toutes les cartes medias
        const cards = Array.from(document.querySelectorAll('.mediaCard'));
                console.log("fct sort -> cards : ", cards);

        // Tri des cartes en fonction du choix 
        const sortedCards = cards.sort((a, b) => {
            switch (clickedOption.textContent) {
                case 'Popularité':
                    const likesA = parseInt(a.querySelector('.mediaLikes').textContent);
                    const likesB = parseInt(b.querySelector('.mediaLikes').textContent);
                    return likesB - likesA;  // tri décroissant
                case 'Date':
                    const DateA = a.querySelector('.mediaDate').textContent;
                    const DateB = b.querySelector('.mediaDate').textContent;
                    return new Date(DateA) - new Date(DateB);  // tri chronologique
                    
                case 'Titre':
                    const titleAElement = a.querySelector('.mediaInfos h3');
                    const titleBElement = b.querySelector('.mediaInfos h3');
                    
                        const titleA = titleAElement.textContent;
                        const titleB = titleBElement.textContent;
                        return titleA.localeCompare(titleB);  // un tri alphabétique
                    
                    
                default:
                    return 0;
            }
        });

        // Suppression des cartes de l'ancien affichage
        const grid = document.querySelector('#mediaDisplayGrid');
        cards.forEach(card => grid.removeChild(card));

        // Ajout des cartes triées à la grille d'affichage
        sortedCards.forEach(card => grid.appendChild(card));
    });
}    


// temporisation pour permettre la création des éléments inhjectés par JS dans le DOM
setTimeout(() => {
    sortMediasCards();
}, 500);