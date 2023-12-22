import React, { Fragment, useEffect, useState } from 'react';
import { API_URLS } from '../../constants';
import { fetchHelper, getAlbumImagesPath } from '../../utils';
import { Link } from 'react-router-dom';

const AlbumLayout = () => {
    const [allAlbums, setAllAlbums] = useState(null);

    useEffect(()=>{
        fetchAllAlbums()
        .then(res => setAllAlbums(res))
        .catch(err => console.error(err));
    }, []);

    return (
        allAlbums && allAlbums.length ? 
            <ul>
                {
                    allAlbums.map(album => 
                    <Fragment key={album.id}>
                        <Link to={getAlbumImagesPath(album.id)}>{album.title}</Link>
                        <br></br>
                    </Fragment>    
                    )
                }
            </ul>
        : ""     
    )
}

async function fetchAllAlbums(){
    try{
        return await fetchHelper(API_URLS.ALL_ALBUMS);
    }
    catch(err){
        console.error(err);
    }
}

export default AlbumLayout;