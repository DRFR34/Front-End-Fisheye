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
