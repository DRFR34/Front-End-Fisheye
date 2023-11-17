// avoids "uncaught" errors from JS injected DOM elements
window.addEventListener('load', () => {


  //== variables 

  const sortingDropdown = document.querySelector('#sortingDropdown');
  let sortingListItems = document.querySelectorAll('#sortingList > li');
  let clickedOption = null;


  //== click handler 

  sortingDropdown.addEventListener('click', (event) => {
    clickedOption = event.target;
    launchSorting(clickedOption);
  });

  //== keydown handlers 


  /**
   *Prevents the default action of the event and sets focus based on the key pressed.
   *@param {Event} event - The keydown event.
   */
  sortingDropdown.addEventListener('keydown', (event) => {
    event.preventDefault
    const firstMedia = mediaDisplayGrid.querySelector(' .media');
    if (!sortingDropdown.classList.contains('sortingDropdownIsActive')) {
      switch (event.key) {
        case 'Tab':
          event.preventDefault();
          if (event.shiftKey) {
            const portrait = document.querySelector('.photographerPortrait');
            portrait.focus();
          } else {
            firstMedia.focus();
          }
          break;
        case 'Enter': {
          toggleDropdownDisplay('dropDownEnter')
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
        event.stopPropagation();
        clickedOption = event.target;
        toggleDropdownDisplay('itemEnter');
        launchSorting(clickedOption);
      }
      else if (event.key === 'Escape') {
        event.preventDefault();
        toggleDropdownDisplay('itemEscape');
        const firstMedia = mediaDisplayGrid.querySelector('.media');
        firstMedia.focus();
      }
    });
  });




  //== functions 

  function toggleDropdownDisplay() {
    sortingDropdown.classList.toggle('sortingDropdownIsActive')
  }

  /**
   * Media sorting launch function.
   * additional feature : place the focus for next navigation steps
   *@param {string} clickedOption = option clicked in the dropdown.
   */
  function launchSorting(clickedOption) {
    cliquedOptionInFirstPosition(clickedOption);
    sortMediasCards(clickedOption);
    const firstMedia = mediaDisplayGrid.querySelector('.media');
    firstMedia.focus();
    firstMedia.addEventListener('keydown', (event) => {
      // Avoids side effects due to the listener of the parent elements 
      event.stopPropagation();
      if (!(event.shiftKey && event.key === 'Tab')) {
        return;
      }
      event.preventDefault();
      sortingDropdown.focus();
    });
  }

  function cliquedOptionInFirstPosition(clickedOption) {
    clickedOption.parentElement.prepend(clickedOption);
  }

  /**
   *Fonction de tri des cartes média.
   *@param {Object} clickedOption - L'option cliquée pour le tri.
   */
  function sortMediasCards(clickedOption) {

    // Select all medias cards
    const cardsList = Array.from(document.querySelectorAll('.mediaCard'));
    const sortedCards = cardsList.sort((a, b) => {
      switch (clickedOption.textContent) {
        case 'Popularité': {
          // descending sorting
          const likesA = parseInt(a.querySelector('.mediaLikes').textContent);
          const likesB = parseInt(b.querySelector('.mediaLikes').textContent);
          return likesB - likesA;
        }
        case 'Date': {
          // anti-chronological sorting
          const DateA = a.querySelector('.mediaDate').textContent;
          const DateB = b.querySelector('.mediaDate').textContent;
          return new Date(DateB) - new Date(DateA);
        }

        case 'Titre': {
          // alphabetical sorting
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
      if (clickedOption.textContent === 'Date') {
        mediaDate.style.display = "block";
      } else {
        mediaDate.style.display = "none";
      }
      mediaDisplayGrid.appendChild(card)
    });
  }

});