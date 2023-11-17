/**
 * - create new instances of PhotoCard or VideoCard classes
 * @class
 */
class MediaFactory {
    /**
     * Creates a new MediaCard of the appropriate type based on the media data.
     * @static
     * @method createMediaCard
     * @param {Object} media - data for the media card.
     * @param {string} media.image - image file name (if the media is an image).
     * @param {string} media.video - video file name (if the media is a video).
     * @returns {Object} A new MediaCard of the appropriate type.
     * @throws {Error} - error if the media type is not 'img' nor 'video'.
     */
    static createMediaCard(media) {
        const {image, video} = media;
        if (image) {
            return new PhotoCard(media).mediaCard;
        } else if (video) {
            return new VideoCard(media).mediaCard;
        } else {
            throw new Error('Invalid media type');
        }
    }
}