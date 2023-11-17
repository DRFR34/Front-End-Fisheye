//== functions 


/**
 * - calculates the total number of likes by getting all displayed likes,
 * - updates the total likes element.
 * - updates the aria-label attribute for accessibility.
 */
function calcTotalOfLikes() {
    const totalLikes = document.getElementById("totalLikes");
    const displayedLikesList = document.querySelectorAll('.mediaLikes');

    /**
     * @param {Number} total - accumulator of .reduce(), initialised at 0
     * @param {String} displayedLikes - text extracted from HTML Elements .medialikes ( will be transformed in Integer by parseInt() )
     */
    // calc. total by successive add to the accumulator (in the callback fct)
    const tempTotalOfLikes = Array.from(displayedLikesList).reduce((total, displayedLikes) => total + parseInt(displayedLikes.textContent), 0);
    totalLikes.textContent = tempTotalOfLikes ;

    //  DOM injection of the updated aria-label
    const pagePhotographerName = document.getElementById("pagePhotographerName").textContent;
    let totalLikesAriaLabel = pagePhotographerName +"cumule un total de :" + tempTotalOfLikes + "likes";    
    totalLikes.setAttribute('aria-label', totalLikesAriaLabel);
    
}

/**
 * - add two event listeners ('click' and 'keydown' )to each heart icon on media cards.()
 * - if click or Enter : calls addOrRemoveLikes()
 * this fonction is called by selectAndInsertMediaInDom()
 */
function voteWithLikes() {
    const cardLikesHeartList = document.querySelectorAll('.cardLikesHeart');

    cardLikesHeartList.forEach(cardLikesHeart => {
        cardLikesHeart.addEventListener('click',() => addOrRemoveLikes(cardLikesHeart) );
        cardLikesHeart.addEventListener('keydown', (event) => (event.key === 'Enter') ? addOrRemoveLikes(cardLikesHeart) : null );
    });
}


/**
 * - Add or remove likes from a media card.
 * - Toggles the heart icons and updates the number of likes accordingly.
 * - Updates the aria-label attribute for accessibility.
 * @param {HTMLElement} cardLikesHeart - = heart icon on the media card.
 */
function addOrRemoveLikes(cardLikesHeart) {
    const likesHeart = cardLikesHeart;
    const mediaLikes = cardLikesHeart.parentElement.querySelector('.mediaLikes');
    let nbOFlikes = parseInt(mediaLikes.textContent);
    const heartClassLIst = cardLikesHeart.classList;
    const emptyHeartClass = "fa-regular";
    const fullHeartClass = "fa-solid"; 

    // Update the number of likes
    nbOFlikes = heartClassLIst.contains(emptyHeartClass) ? ++nbOFlikes : --nbOFlikes;
    mediaLikes.textContent = nbOFlikes;
    heartClassLIst.toggle(emptyHeartClass);       
    heartClassLIst.toggle(fullHeartClass);
    let mediaLikesAriaLabel = "Nombre de mentions j'aime :" + nbOFlikes;
    mediaLikes.setAttribute('aria-label', mediaLikesAriaLabel)

     // Update the aria-label attribute of the heart icon
    if (heartClassLIst.contains(emptyHeartClass)){
        likesHeart.setAttribute('aria-label',"");
        likesHeart.setAttribute('aria-label',"Cliquez pour ajouter une mention j'aime");
    } else {
        likesHeart.setAttribute('aria-label',"");
        likesHeart.setAttribute('aria-label',"Cliquez pour retirer votre mention j'aime :")
    }

    calcTotalOfLikes();
}
  
