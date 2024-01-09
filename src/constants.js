const ALBUMS_BASE_PATH = "/albums";

export const ROUTES = {
    BASE_PATH: ALBUMS_BASE_PATH,
    ALBUM_IMAGES: `${ALBUMS_BASE_PATH}:albumId/images`,
    ALL_IMAGES: `${ALBUMS_BASE_PATH}all-images`,
}

export const API_URLS = {
    ALL_ALBUMS: "https://jsonplaceholder.typicode.com/albums",
    ALBUMS_IMAGES: (albumId) => `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,
    ALL_IMAGES: "https://jsonplaceholder.typicode.com/photos",
}