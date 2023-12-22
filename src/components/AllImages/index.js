import React, { Fragment, useState } from 'react';
import { API_URLS } from '../../constants';
import { fetchHelper } from '../../utils';

const AllImages = () => {
    const [allImages, setAllImages] = useState(null);

    function getAllImages(){
        fetchAllImages()
        .then(res => setAllImages(res))
        .catch(err => console.error(err));
    }

    return (
        <>
            {!allImages?.length && 
                <button onClick={getAllImages}>Get all images</button>}
            {
                allImages?.length && 
                <ul>
                    {
                        allImages.map(image => 
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

async function fetchAllImages(){
    try{
        return await fetchHelper(API_URLS.ALL_IMAGES);
    }
    catch(err){
        console.error(err);
    }
}

export default AllImages;