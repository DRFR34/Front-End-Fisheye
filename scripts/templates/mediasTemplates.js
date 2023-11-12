

class PhotoCard {
    constructor(data) {
        const { photographerId, title, image, likes, date } = data;
        this.photoCard = document.createElement('article');
        this.photoCard.className = 'mediaCard photoCard';
        this.photoCard.innerHTML = ` 
            <div class ="mediaBox photoBox">           
                <img class="media image" tabindex="0" alt="${title}" src="./assets/fisheye_photos/sample_photos/${photographerId}/${image}" alt="Photo intitulée${title}" >      
            </div>
            <div class="mediaInfos">
                <h3>${title}</h3>
                <span class=" mediaDate">${date}</span>
                <div class="likesContainer">
                    <span class="invisible">Nombre de mentions j'aime :</span>
                    <p class="mediaLikes" aria-label="Nombre de mentions j'aime : ${likes}" tabindex="0" >${likes}</p>
                    <i class="cardLikesHeart fa-regular fa-heart" tabindex="0" role="img" aria-label="Cliquez pour ajouter une mention j'aime"></i>            
                </div>
            </div>           
             `;
    }
}


class VideoCard {
    constructor(data) {
        const { photographerId, title, video, likes, date } = data;
        this.videoCard = document.createElement('article');
        this.videoCard.className = 'mediaCard videoCard';
        this.videoCard.innerHTML = `
            <div class="mediaBox videoBox">
                <video class="media video" src="./assets/fisheye_photos/sample_photos/${photographerId}/${video}" aria-label="video intitulée ${title}" tabindex="0">video intitulée ${title} </video>
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



