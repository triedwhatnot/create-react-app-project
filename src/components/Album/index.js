import { Outlet } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";

const Album = function(){
    

    return(
        <>
            <Breadcrumbs />
        

            <Outlet/>
        </>
    )
}

export default Album;