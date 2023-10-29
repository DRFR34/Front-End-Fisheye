

function calcTotalOfLikes() {

    const totalLikes = document.getElementById("totalLikes");

    const displayedLikesList = document.querySelectorAll('.mediaLikes');

    const tempTotalOfLikes = Array.from(displayedLikesList).reduce((total, displayedLikes) => total + parseInt(displayedLikes.textContent), 0);

            console.log("tempTotalOfLikes : ", tempTotalOfLikes);                
        
    totalLikes.textContent = tempTotalOfLikes       
    
}

//+1 si carte non cliquée, sinon -1 ;
// + ou -  la classe clickedHeart ( → affichage d'un coeur plein)
function addOrRemoveLikes() {
    const cardLikesHeartList = document.querySelectorAll('.cardLikesHeart');

    cardLikesHeartList.forEach(cardLikesHeart => {
        
        let yetClicked = false;
    
        cardLikesHeart.addEventListener('click', () => {
           
            const mediaLikes = cardLikesHeart.parentElement.querySelector('.mediaLikes');
            let nbOFlikes = parseInt(mediaLikes.textContent);
    
            if (!yetClicked) {
                
                mediaLikes.textContent = nbOFlikes + 1;
                yetClicked = true;
                cardLikesHeart.classList= "cardLikesHeart clickedHeart fa-solid fa-heart";('clickedHeart')                
            } else {
                
                mediaLikes.textContent = nbOFlikes - 1;
                yetClicked = false;
                cardLikesHeart.classList ="cardLikesHeart fa-regular fa-heart";
            }
            calcTotalOfLikes();
        });
    });

}
 // tempo pour création du Dom par JS
setTimeout(() => { 
    calcTotalOfLikes();
    addOrRemoveLikes();
    }, 200);