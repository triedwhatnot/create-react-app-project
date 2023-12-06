import { useLocation } from "react-router-dom";

const AllImages = function(){

    const navigate = useLocation();
    console.log(navigate)


    return(
        <>
            AllImages
        </>
    )
}

export default AllImages;