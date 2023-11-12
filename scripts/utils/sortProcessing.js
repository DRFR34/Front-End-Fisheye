//== variables 

const sortingDropdown = document.querySelector('#sortingDropdown');
let sortingListItems = document.querySelectorAll('#sortingList > li');
const toggleDropdownDisplay = function() {sortingDropdown.classList.toggle('sortingDropdownIsActive')}
let clickedOption = null;


//== click handler 

sortingDropdown.addEventListener('click', (event) => {
    clickedOption = event.target;
    launchSorting (clickedOption);
});

//== keydown handlers 

sortingDropdown.addEventListener('keydown', (event) => {
    event.preventDefault
    const firstMedia = mediaDisplayGrid.querySelector(' .media');
    if (!sortingDropdown.classList.contains('sortingDropdownIsActive')) {
        switch (event.key){
            case 'Tab':
                event.preventDefault();
                if(event.shiftKey) {
                    const portrait = document.querySelector('#photographerPortrait');
                    portrait.focus();
                } else { 
                firstMedia.focus(); 
                }                
                break;

            // case 'Tab' &&  : {
            //     const portrait = document.querySelector('#photographerPortrait');
            //     portrait.focus();
            //     break;
            // }
            case 'Enter' :{

                //! wip
                // sortingDropdown.click();
                sortingDropdown.classList.toggle('sortingDropdownIsActive');
                // toggleDropdownDisplay();
                let firstItem = sortingListItems[0];
                firstItem.focus();
            }
        }
    } 
});

sortingListItems.forEach((item) => {
    item.addEventListener('keydown', (event) => {
        sortingListItems = document.querySelectorAll('#sortingList > li'); 
      if (event.key === 'Tab' && event.shiftKey) {
        if (document.activeElement === sortingListItems[0]) {
          event.preventDefault();
          sortingListItems[2].focus();
        }
      } else if (event.key === 'Tab') {
        if (document.activeElement === sortingListItems[2]) {
          event.preventDefault();
          sortingListItems[0].focus();
        }
      } else if (event.key === 'Enter') {
        clickedOption = event.target;
        launchSorting (clickedOption);
        event.target.parentElement.parentElement.classList.remove('sortingDropdownIsActive')
        console.log("sortingDropdown classList after item enter ", sortingDropdown.classList);
        sortingDropdown.focus()
        

      } else if (event.key === 'Escape') {
        event.preventDefault();
        toggleDropdownDisplay()
        const firstMedia = mediaDisplayGrid.querySelector('.media');
        firstMedia.focus();
      } 
    });
  });

//== functions 

function launchSorting (clickedOption){
    cliquedOptionInFirstPosition(clickedOption) ;
    sortMediasCards(clickedOption); 
    
}

function cliquedOptionInFirstPosition(clickedOption) {
    clickedOption.parentElement.prepend(clickedOption);
}

function sortMediasCards(clickedOption){

        // Select all medias cards
        const cardsList = Array.from(document.querySelectorAll('.mediaCard'));
        const sortedCards = cardsList.sort((a, b) => {
            switch (clickedOption.textContent) {
                case 'Popularité': {
                    // descending sort
                    const likesA = parseInt(a.querySelector('.mediaLikes').textContent);
                    const likesB = parseInt(b.querySelector('.mediaLikes').textContent);
                    return likesB - likesA;  
                }
                case 'Date':{
                    // anti-chronological sorting
                    const DateA = a.querySelector('.mediaDate').textContent;
                    const DateB = b.querySelector('.mediaDate').textContent;
                    return new Date(DateB) - new Date(DateA);  
                }
                    
                case 'Titre':{
                    // alphabetical sort
                    const titleAElement = a.querySelector('.mediaInfos h3');
                    const titleBElement = b.querySelector('.mediaInfos h3');
                    
                        const titleA = titleAElement.textContent;
                        const titleB = titleBElement.textContent;
                        return titleA.localeCompare(titleB);  
                }
                    
                    
                default:
                    return 0;
            }
        });

        // Delete previous medias cards
        const mediaDisplayGrid = document.querySelector('#mediaDisplayGrid');
        cardsList.forEach(card => mediaDisplayGrid.removeChild(card));
        
        sortedCards.forEach(card => {
            let mediaDate = card.querySelector('.mediaDate');
            if(clickedOption.textContent === 'Date') {
                    mediaDate.style.display = "block";
            } else {               
                    mediaDate.style.display = "none";
            }
            mediaDisplayGrid.appendChild(card)
        });
}    
