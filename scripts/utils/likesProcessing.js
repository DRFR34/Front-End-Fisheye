//== functions 

function calcTotalOfLikes() {
    const totalLikes = document.getElementById("totalLikes");
    const displayedLikesList = document.querySelectorAll('.mediaLikes');
    const tempTotalOfLikes = Array.from(displayedLikesList).reduce((total, displayedLikes) => total + parseInt(displayedLikes.textContent), 0);
    totalLikes.textContent = tempTotalOfLikes ;
    const pagePhotographerName = document.getElementById("pagePhotographerName").textContent;
    let totalLikesAriaLabel = pagePhotographerName +"cumule un total de :" + tempTotalOfLikes + "likes";
    totalLikes.setAttribute('aria-label', totalLikesAriaLabel);
    
}


function voteWithLikes() {
    const cardLikesHeartList = document.querySelectorAll('.cardLikesHeart');

    cardLikesHeartList.forEach(cardLikesHeart => {
        cardLikesHeart.addEventListener('click',() => addOrRemoveLikes(cardLikesHeart) );
        cardLikesHeart.addEventListener('keydown', (event) => (event.key === 'Enter') ? addOrRemoveLikes(cardLikesHeart) : null );
    });
}

function addOrRemoveLikes(cardLikesHeart) {
    const likesHeart = cardLikesHeart;
    const mediaLikes = cardLikesHeart.parentElement.querySelector('.mediaLikes');
    let nbOFlikes = parseInt(mediaLikes.textContent);
    const heartClassLIst = cardLikesHeart.classList;
    const emptyHeartClass = "fa-regular";
    const fullHeartClass = "fa-solid"; 

    nbOFlikes = heartClassLIst.contains(emptyHeartClass) ? ++nbOFlikes : --nbOFlikes;
    mediaLikes.textContent = nbOFlikes;
    heartClassLIst.toggle(emptyHeartClass);       
    heartClassLIst.toggle(fullHeartClass);
    let mediaLikesAriaLabel = "Nombre de mentions j'aime :" + nbOFlikes;
    mediaLikes.setAttribute('aria-label', mediaLikesAriaLabel)
    if (heartClassLIst.contains(emptyHeartClass)){
        likesHeart.setAttribute('aria-label',"");
        likesHeart.setAttribute('aria-label',"Cliquez pour ajouter une mention j'aime");
    } else {
        likesHeart.setAttribute('aria-label',"");
        likesHeart.setAttribute('aria-label',"Cliquez pour retirer votre mention j'aime :")
    }

    calcTotalOfLikes();
}
  
