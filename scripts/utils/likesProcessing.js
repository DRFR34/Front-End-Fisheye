

function calcTotalOfLikes() {

    const totalLikes = document.getElementById("totalLikes");

    const displayedLikesList = document.querySelectorAll('.mediaLikes');

    const tempTotalOfLikes = Array.from(displayedLikesList).reduce((total, displayedLikes) => total + parseInt(displayedLikes.textContent), 0);

            // console.log("tempTotalOfLikes : ", tempTotalOfLikes);                
        
    totalLikes.textContent = tempTotalOfLikes ;      
    
}

//+1 si carte non cliquée, sinon -1 ;
// + ou -  la classe clickedHeart ( → affichage d'un coeur plein)
function voteWithLikes() {
    const cardLikesHeartList = document.querySelectorAll('.cardLikesHeart');

    cardLikesHeartList.forEach(cardLikesHeart => {
        cardLikesHeart.addEventListener('click',() => addOrRemoveLikes(cardLikesHeart) );
        cardLikesHeart.addEventListener('keydown', (event) => (event.key === 'Enter') ? addOrRemoveLikes(cardLikesHeart) : null );
    });
}

function addOrRemoveLikes(cardLikesHeart) {
    const mediaLikes = cardLikesHeart.parentElement.querySelector('.mediaLikes');
    let nbOFlikes = parseInt(mediaLikes.textContent);
    if ( cardLikesHeart.classList.contains("fa-regular")) {
        mediaLikes.textContent = nbOFlikes + 1;
        cardLikesHeart.classList.remove("fa-regular");       
        cardLikesHeart.classList.add("fa-solid");     
    } else {
        mediaLikes.textContent = nbOFlikes - 1;
        cardLikesHeart.classList.remove("fa-solid");       
        cardLikesHeart.classList.add("fa-regular");  
    }

    calcTotalOfLikes();
}
  

 // tempo pour création du Dom par JS
setTimeout(() => { 
    calcTotalOfLikes();
    voteWithLikes() 
    // addOrRemoveLikes();
    }, 200);