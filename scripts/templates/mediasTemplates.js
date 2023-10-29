

class PhotoCard {
    constructor(data) {
        const { id, photographerId, title, image, likes, date } = data;
        this.photoCard = document.createElement('article');
        this.photoCard.className = 'mediaCard photoCard';
        this.photoCard.innerHTML = ` 
            <div class ="mediaBox photoBox">           
                <img class="media image" tabindex="0" alt="${title}" src="./assets/fisheye_photos/sample_photos/${photographerId}/${image}" alt="${title}">      
                 </div>
                <div class="mediaInfos">
                    <h3>${title}</h3>
                    <span class=" mediaDate">${date}</span>
                    <div class="likesContainer">
                        <p class="mediaLikes ">${likes}</p>
                         <i class="cardLikesHeart fa-regular fa-heart"></i>            
                 </div>
             </div>           
             `;
    }
}


class VideoCard {
    constructor(data) {
        const { id, photographerId, title, video, likes, date } = data;
        this.videoCard = document.createElement('article');
        this.videoCard.className = 'mediaCard videoCard';
        this.videoCard.innerHTML = `
            <div class="mediaBox videoBox" >
                <video class="media video" src="./assets/fisheye_photos/sample_photos/${photographerId}/${video}" tabindex="0"></video>
            </div>
            <div class="mediaInfos">
                <h3>${title}</h3>
                <div class="likesContainer">
                    <span class=" mediaDate">${date}</span>
                    <p class="mediaLikes">${likes}</p>
                    <i class="cardLikesHeart fa-regular fa-heart"></i>
                </div>
            </div>
        `;
    }
}



