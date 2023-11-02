setTimeout(() => {
    let medias = document.querySelectorAll('.media');
    let titles = document.querySelectorAll('.mediaInfos h3');
    let mediasSrcArray = Array.from(medias, media => media.currentSrc);
    let mediasTitles = Array.from(titles).map(h3 => h3.innerText);
    let currentIndex = 0;

    

    let lightboxModal = document.createElement("section");
    lightboxModal.id = "lightboxModal";
    document.body.appendChild(lightboxModal);
    lightboxModal.innerHTML = `
    <div class="lightboxContainer" tabindex="-1">
        <button type="button" id="previousBtn" tabindex="0" aria-label="Afficher le média précédent">
            <i class="previousIcon fa-solid fa-chevron-left"></i>
        </button>
        <figure class ="lightboxFigure" tabindex="-1">
            <img src="" alt="" tabindex="-1">
            <figcaption class="lightboxCaption" tabindex="-1">
                <h2 class="lightboxTitle" tabindex="0" ></h2>
            </figcaption>
        </figure>

        <button type="button" id="nextBtn" tabindex="0" aria-label="Afficher le média suivant">
            <i class="nextIcon fa-solid fa-chevron-right"></i>
        </button>

        <button type="button" id="closeLightBoxBtn" class="closeBtn"  tabindex="0" aria-label="fermer le diaporama">
            <i class="closeIcon fa-solid fa-xmark"></i>            
        </button>
    </div>
    `;

    let img = lightboxModal.querySelector('img');
    let lightboxTitle = lightboxModal.querySelector(".lightboxTitle");

    // let lightBoxfirstFocusableElement = lightboxModal.querySelector('[tabindex="0"]'); // Utilise'querySelector' pour le premier élément
    // let lightBoxfocusableContent = lightboxModal.querySelectorAll(lightBoxfocusableElements);
    // let lightBoxlastFocusableElement = lightBoxfocusableContent[lightBoxfocusableContent.length - 1];


    function closeLightboxModal() {
        lightboxModal.style.display = 'none';
    }

    medias.forEach((media, index) => {
        media.addEventListener('click', () => {
            currentIndex = index;
            updateMedia();
            lightboxModal.style.display = 'block';
            lightBoxfirstFocusableElement.focus();
        });
    });

    previousBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + mediasSrcArray.length) % mediasSrcArray.length;
        updateMedia();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % mediasSrcArray.length;
        updateMedia();
    });

    closeLightBoxBtn.addEventListener('click', closeLightboxModal);

    function updateMedia() {
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
    // }, 500);


    //****** keyboard navigation ****** 

    // const closeContactFormBtn = document.querySelector('#closeContactFormBtn');
    // const submitBtn= document.querySelector('#submitBtn');

    // closeLightBoxBtn.addEventListener('keydown', (e) => {
    //     if (e.key === 'Enter') {
    //       closeModal();
    //     }
    //   });

    // closeLightBoxBtn.addEventListener('click', closeLightboxModal);

    // const submitBtn= document.querySelector('#submitBtn');

    // const form = document.querySelector("form");

    // const closeBtn = document.querySelector('#closeBtn');
    // const submitBtn= document.querySelector('#submitBtn');

    // closeLightBoxBtn.addEventListener('keydown', (e) => {
    //     if (e.key === 'Enter') {
    //         closeLightboxModal();
    //     }
    // });
    closeLightBoxBtn.addEventListener('keydown', (e) => (e.key === 'Enter') ? closeLightboxModal() : null);
    closeLightBoxBtn.addEventListener('click', closeLightboxModal);       

    // const submitBtn= document.querySelector('#submitBtn');

    // const form = document.querySelector("form");
    // form.addEventListener('submit', (e) => e.preventDefault());
    const lightBoxfocusableElements = 'button, [tabindex="0"]';
    // let modal = document.querySelector('#modal'); // Assurez-vous que 'modal' est bien défini
    // console.log("modal : ", modal);

    let lightBoxfirstFocusableElement = lightboxModal.querySelector('[tabindex="0"]'); // Utilise'querySelector' pour le premier élément
    let lightBoxfocusableContent = lightboxModal.querySelectorAll(lightBoxfocusableElements);
    let lightBoxlastFocusableElement = lightBoxfocusableContent[lightBoxfocusableContent.length - 1];
    // }





    document.addEventListener("keydown", (e) => {
        let isTabPressed = e.key === "Tab";
        let isEscapePressed = e.key === "Escape"
        let isRightArrow = e.key === ""

        if (isEscapePressed) {
            closeLightboxModal();
        }
        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) {
            if (document.activeElement === lightBoxfirstFocusableElement) {
                lightBoxlastFocusableElement.focus();
                e.preventDefault();
            }
        } else { 
            if (document.activeElement === lightBoxlastFocusableElement) {
                lightBoxfirstFocusableElement.focus();
                e.preventDefault();
            }
        }
    });

 

}, 500);