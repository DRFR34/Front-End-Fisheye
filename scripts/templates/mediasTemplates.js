//  function createPhotoCard(data) {
//     // destructuration
//     const { id, photographerId, title, image,likes} = data;
//     const photoCard = document.createElement( 'article' );
//     photoCard.className='photoCard';
//     photoCard.innerHTML = ` 
//         <div class ="photoBox">           
//         <img class='media-${id}' tabindex="0" alt="${title}" src="./assets/fisheye_photos/sample_photos/${photographerId}/${image}" alt="${title}">      
//         </div>
//         <div class="mediaInfos">
//             <h3>${title}</h3>
//             <div class="likesContainer">
//                 <p class="mediaLikes">${likes}</p>
//                 <i class="mediaCardIcon">&hearts;</i>            
//         </div>
//     </div>           
//     `;      
//     return photoCard;
// }

class PhotoCard {
    constructor(data) {
        const { id, photographerId, title, image, likes } = data;
        this.photoCard = document.createElement('article');
        this.photoCard.className = 'photoCard';
        this.photoCard.innerHTML = ` 
                <div class ="photoBox">           
                <img class='media-${id}' tabindex="0" alt="${title}" src="./assets/fisheye_photos/sample_photos/${photographerId}/${image}" alt="${title}">      
                 </div>
                <div class="mediaInfos">
                    <h3>${title}</h3>
                    <div class="likesContainer">
                        <p class="mediaLikes">${likes}</p>
                         <i class="mediaCardIcon">&hearts;</i>            
                 </div>
             </div>           
             `;   
    }
}



//**  function createVideoCard(data) {
//     // destructuration
//     const {id, photographerId, title, video, likes} = data;
//     const videoCard = document.createElement( 'article' );
//     videoCard.className='videoCard';
//     videoCard.innerHTML = ` 
//         <div class ="videoBox">           
//             <video src="./assets/fisheye_photos/sample_photos/${photographerId}/${video}" controls tabindex="0">
//         </div>
//         <div class="mediaInfos">
//             <h3>${title}</h3>
//             <div class="likesContainer">
//                 <p class="mediaLikes">${likes}</p>
//                 <i class="mediaCardIcon">&hearts;</i>            
//         </div>
//     </div>           
//     `;      
    
//     return videoCard;
// }

//


//


class VideoCard {
    constructor(data) {
        const { id, photographerId, title, video, likes } = data;
        this.videoCard = document.createElement('article');
        this.videoCard.className = 'videoCard';
        this.videoCard.innerHTML = `
            <div class="videoBox">
                <video src="./assets/fisheye_photos/sample_photos/${photographerId}/${video}" controls tabindex="0"></video>
            </div>
            <div class="mediaInfos">
                <h3>${title}</h3>
                <div class="likesContainer">
                    <p class="mediaLikes">${likes}</p>
                    <i class="mediaCardIcon">&hearts;</i>
                </div>
            </div>
        `;
    }
}



//******************* calcuul des likes ********************** */
