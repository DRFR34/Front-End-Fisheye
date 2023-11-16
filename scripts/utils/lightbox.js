// wait for all DOM's elements loaded
window.addEventListener('load', () => {

    //== variables 
   
    let medias = document.querySelectorAll('.media');
    let titles = document.querySelectorAll('.mediaInfos h3');
    let mediasSrcArray = Array.from(medias).map(media => media.currentSrc);
    let mediasTitles = Array.from(titles).map(h3 => h3.innerText);
    let currentIndex = 0;
    let lightboxModal = document.createElement("div");
    lightboxModal.id = "lightboxModal";

    //== Modal injection in DOM 

    document.body.appendChild(lightboxModal);
    lightboxModal.innerHTML = `
    <div class="lightboxContainer" tabindex="-1">
        <button type="button" id="previousBtn" tabindex="0" aria-label="Afficher le média précédent">
            <i class="previousIcon fa-solid fa-chevron-left"></i>
        </button>
        <figure class ="lightboxFigure" tabindex="-1">
            <img src="" alt="" tabindex="-1">
            <figcaption class="lightboxCaption" tabindex="-1">
                <h2 class="lightboxTitle" tabindex="0" >texte dynamique</h2>
            </figcaption>
        </figure>

        <button type="button" id="nextBtn" tabindex="0" aria-label="Afficher le media suivant">
            <i class="nextIcon fa-solid fa-chevron-right"></i>
        </button>

        <button type="button" id="closeLightBoxBtn" class="closeBtn"  tabindex="0" aria-label="fermer le diaporama">
            <i class="closeIcon fa-solid fa-xmark"></i>            
        </button>
    </div>
    `;

    let img = lightboxModal.querySelector('img');
    let lightboxTitle = lightboxModal.querySelector(".lightboxTitle");

    function closeLightboxModal(eventCause) {
        lightboxModal.style.display = 'none';
        eventCause === 'isKeyPressed'? escapeLink.focus() : null;


    }

    //-- open ligthbox

    medias.forEach((media, index) => {

        media.addEventListener('click', () => {
            // currentIndex = index;
            setMediaType();
            lightboxModal.style.display = 'block';
            lightBoxfirstFocusableElement.focus();
        });

        media.addEventListener('keydown', (event) => {            
            if (event.key === 'Enter') {
                event.preventDefault();
                // currentIndex = index;
                setMediaType();
                lightboxModal.style.display = 'block';
                lightBoxfirstFocusableElement.focus();
            }
        });
    });

    previousBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + mediasSrcArray.length) % mediasSrcArray.length;
        setMediaType();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % mediasSrcArray.length;
        setMediaType();
    });

    closeLightBoxBtn.addEventListener('click', closeLightboxModal);

   
    function setMediaType() {
        let isVideo = medias[currentIndex].tagName.toLowerCase() === 'video';

        img.remove();
        if (isVideo) {
            img = document.createElement('video');
            img.controls = true;
        } else {
            img = document.createElement('img');
        }
        img.src = mediasSrcArray[currentIndex];
        lightboxTitle.innerText = mediasTitles[currentIndex];
        lightboxModal.querySelector('.lightboxFigure').prepend(img);
    }
    


    //== Modal's keyboard navigation  
    
    // *don't go out of the modal  

    closeLightBoxBtn.addEventListener('keydown', (event) => (event.key === 'Enter') ? closeLightboxModal('isKeyPressed') : null);
    closeLightBoxBtn.addEventListener('click', closeLightboxModal);
    const lightBoxfocusableElements = 'button, [tabindex="0"]';

    let lightBoxfirstFocusableElement = lightboxModal.querySelector('[tabindex="0"]');
    let lightBoxfocusableContent = lightboxModal.querySelectorAll(lightBoxfocusableElements);
    let lightBoxlastFocusableElement = lightBoxfocusableContent[lightBoxfocusableContent.length - 1];

   
    document.addEventListener("keydown", (event) => {
        let isTabPressed = event.key === "Tab";
        let isEscapePressed = event.key === "Escape";

        if (isEscapePressed) {
            if (lightboxModal.style.display === 'block') {
                closeLightboxModal('isKeyPressed');
            }            
        }
        if (!isTabPressed) {
            return;
        }
        if (event.shiftKey) {
            if (document.activeElement === lightBoxfirstFocusableElement) {
                lightBoxlastFocusableElement.focus();
                event.preventDefault();
            }
        } else {
            if (document.activeElement === lightBoxlastFocusableElement) {
                lightBoxfirstFocusableElement.focus();
                event.preventDefault();
            }
        }
    });
});