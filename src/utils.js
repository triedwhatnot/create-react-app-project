

export async function fetchHelper(apiUrl){
    try{
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw(Error(`Error in fetching : ${apiUrl}`, {
                cause: {
                    status: response.status, 
                    statusText: response.statusText,
                },
            }));
        }
    }
    catch(err){
        console.error(err, "err.cause : ", err.cause);
    }
}

export function getAlbumImagesPath(albumId){
    return `/${albumId}/images`;
}
 