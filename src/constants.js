export const ROUTES = {
    BASE_PATH: "/",
    ALBUM_IMAGES: "/:albumId/images",
    ALL_IMAGES: "/all-images",
}

export const API_URLS = {
    ALL_ALBUMS: "https://jsonplaceholder.typicode.com/albums",
    ALBUMS_IMAGES: (albumId) => `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,
    ALL_IMAGES: "https://jsonplaceholder.typicode.com/photos",
}