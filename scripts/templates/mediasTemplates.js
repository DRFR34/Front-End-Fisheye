


/**
 * Abstract Class for DRY code
 * @abstract
 * @class
 */
class MediaCard {    
    /**
     * - Creates a new MediaCard.
     * @constructor
     * @param {Object} data - data for the media card.
     * @param {string} mediaType - type of the media ('img' or 'video').
     * @param {number} data.photographerId - The ID of the photographer.
     * @param {string} data.title - title of the media.
     * @param {number} data.likes - number of likes for the media.
     * @param {string} data.date - date of media's creation'.
     * @param {string} data.image - image's file name (if mediaType = 'img').
     * @param {string} data.video - video's file name (if mediaType = 'video').
     */
    constructor(data, mediaType) {
        const { photographerId, title, likes, date, image, video } = data;
        this.mediaCard = document.createElement('article');
        this.mediaCard.className = `mediaCard ${mediaType}Card`;
        this.mediaCard.innerHTML = `
            <div class="mediaBox ${mediaType}Box">
                <${mediaType === 'img' ? 'img' : 'video'} class="media ${mediaType}" src="./assets/fisheye_photos/sample_photos/${photographerId}/${mediaType === 'img' ? image : video}" aria-label="${mediaType === 'img' ? 'image' : 'vidéo'} intitulée ${title}" tabindex="0"> 
                </${mediaType === 'img' ? 'img' : 'video'}>
            </div>
            <div class="mediaInfos">
                <h3>${title}</h3>
                <div class="likesContainer">
                    <span class=" mediaDate">${date}</span>
                    <span class="invisible">Nombre de mentions j'aime :</span>
                    <p class="mediaLikes" aria-label="Nombre de mentions j'aime ${likes}" tabindex="0">${likes}</p>
                    <i class="cardLikesHeart fa-regular fa-heart" role="img" aria-label="Cliquez pour ajouter une mention j'aime"  tabindex="0"></i>
                </div>
            </div>
        `;
    }
}


/**
 * instantiated by the MediaFactory class
 * @class
 * @extends MediaCard
 * @constructor
 * @param {Object} data - data for the video card.
 * @param {String} img - define mediaType in super constructor
 */
class PhotoCard extends MediaCard {
    constructor(data) {
        super(data, 'img');
    }
}

/**
     * instantiated by the MediaFactory class
     * @class
     * @extends MediaCard
     * @constructor
     * @param {Object} data - data for the video card.
     * @param {String} video - define mediaType in super constructor
     */
class VideoCard extends MediaCard {
    constructor(data) {
        super(data, 'video');
    }
}


