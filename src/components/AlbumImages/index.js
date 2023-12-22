import React, { Fragment, useState } from 'react';
import { API_URLS } from '../../constants';
import { fetchHelper } from '../../utils';
import { useParams } from 'react-router-dom';

const AlbumImages = () => {
    const [albumImages, setAlbumImages] = useState(null);
    const albumId = useParams()?.albumId;

    function getAlbumImages(){
        if(albumId){
            fetchAlbumImages(albumId)
            .then(res => setAlbumImages(res))
            .catch(err => console.error(err));
        }
    }

    return (
        <>
            {!albumImages?.length && <button onClick={getAlbumImages}>Get album images</button>}
            {
                albumImages?.length && 
                <ul>
                    {
                        albumImages.map(image => 
                        <Fragment key={image.id}>
                            <img height={200} src={image.url} alt={image.title} />
                            <br></br>
                        </Fragment>    
                        )
                    }
                </ul>
            }
        </>
    )
}

async function fetchAlbumImages(albumId){
    try{
        if(!albumId) throw Error("No albumId present");
        return await fetchHelper(API_URLS.ALBUMS_IMAGES(albumId));
    }
    catch(err){
        console.error(err);
    }
}

export default AlbumImages;