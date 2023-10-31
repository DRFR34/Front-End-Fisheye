setTimeout( () => {
    let medias = document.querySelectorAll('.media');
    let titles = document.querySelectorAll('.mediaInfos h3');

    let mediasSrcArray = Array.from(medias, media => media.currentSrc);
    let mediasTitles = Array.from(titles).map(h3 => h3.innerText);

    let currentIndex = 0;

    let lightboxModal = document.createElement("section");
    lightboxModal.id = "lightboxModal";
    document.body.appendChild(lightboxModal);
    lightboxModal.innerHTML=`
    <div class="lightboxContainer">
        <button type="button" id="previousBtn" tabindex="0" aria-label="Afficher le média précédent">
            <i class="previousIcon fa-solid fa-chevron-left"></i>
        </button>
        <figure class ="lightboxFigure">
            <img src="" alt="">
            <figcaption class="lightboxCaption">
                <h2 class="lightboxTitle"></h2>
            </figcaption>
        </figure>

        <button type="button" id="nextBtn" tabindex="0" aria-label="Afficher le média suivant">
            <i class="nextIcon fa-solid fa-chevron-right"></i>
        </button>

        <button type="button" id="closeBtn" tabindex="0" aria-label="fermer le diaporama">
            <i class="closeIcon fa-solid fa-xmark"></i>            
        </button>
    </div>
    `;

    let img = lightboxModal.querySelector('img');
    let lightboxTitle = lightboxModal.querySelector(".lightboxTitle")

    medias.forEach((media, index) => {
        media.addEventListener('click', () => {
            currentIndex = index;
            updateMedia();
            lightboxModal.style.display = 'block';
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

    closeBtn.addEventListener('click', () => {
        lightboxModal.style.display = 'none';
    });

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
}, 500);
