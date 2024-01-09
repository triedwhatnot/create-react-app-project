import React, { useState } from 'react';
import { API_URLS } from '../../constants';
import { fetchHelper, getAlbumImagesPath } from '../../utils';
import { Link } from 'react-router-dom';
import { FixedSizeList as List } from 'react-window';

const AlbumLayout = () => {
    const [allAlbums, setAllAlbums] = useState(null);
    const [useVirtualisation, setUseVirtualisation] = useState(false);
    const [showList, setShowList] = useState(false);

    function handleCheckboxUpdate(e){
        setUseVirtualisation(e.target.checked);
    }

    function resetHandler(){
        setShowList(false);
    }

    function getAllAlbums(){
        if(allAlbums?.length){
            setShowList(true);
        }
        else{
            fetchAllAlbums()
            .then(res => {
                setAllAlbums(restructureAlbumData(res));
                setShowList(true);
                return;
            })
            .catch(err => console.error(err));
        }

        
    }
    

    return (
        <>
        {
            !showList &&
            <>
            <input type="checkbox" name="vehicle1" value="use virtualised list" checked={useVirtualisation} onChange={handleCheckboxUpdate} />
            <label htmlFor="vehicle1">use virtualised list</label><br/>
            </>
        }
        <button onClick={resetHandler}>Reset</button> 
        {
            showList 
            ? 
                (
                    useVirtualisation ?  <VirtualisedList allAlbums={allAlbums} /> : <NonVirtualisedList allAlbums={allAlbums} />
                )
            : 
            <button onClick={getAllAlbums}>Show albums</button> 
        }   
        </>
    )
}

function restructureAlbumData(albumData){
    // duplicating to get real time analysis
    const resultData = [];
    let i;
    for(i=0; i<50000; i++){
        resultData.push({
            id: i,
            title: albumData[i%100].title,
        })
    }
    return resultData;
}

function VirtualisedList({allAlbums}){
    function getRow({index, style}){
        let album = allAlbums[index];
        return (
            <div key={album.id} className='album-row' style={style}>
                <Link className='album-row-link' to={getAlbumImagesPath(album.id)}>{album.id}. {album.title}</Link>
                <br></br>
            </div>  
        )
    }

    return (
        <List
            height={500}
            itemCount={allAlbums.length}
            itemSize={35}
            width={700}
            className='album-container'>
            { getRow }
        </List>
    )
}

function NonVirtualisedList({allAlbums}){
    return (
        <div className='album-container'>
        {
            allAlbums.map(album => 
            <div key={album.id} className='album-row'>
                <Link className='album-row-link' to={getAlbumImagesPath(album.id)}>{album.id}. {album.title}</Link>
                <br></br>
            </div>) 
        }
        </div>   
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