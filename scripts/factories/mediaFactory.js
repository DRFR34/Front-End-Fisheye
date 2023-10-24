

// class MediaFactory {
//     static createMediaCard(media) {
//         const{ image, video } = media;
//         if(image) {
//             return createPhotoCard(media);
//         } else if(video) {
//             return createVideoCard(media);
//         } else {
//             throw newError('Invalid media type');
//         }
//     }
// }
class MediaFactory {
    static createMediaCard(media) {
        const { image, video } = media;
        if (image) {
            return new PhotoCard(media).photoCard;
        } else if (video) {
            return new VideoCard(media).videoCard;
        } else {
            throw new Error('Invalid media type');
        }
    }
}
