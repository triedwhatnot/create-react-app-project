import { Outlet } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import ErrorBoundary from "../../ErrorBoundary";

const ParentLayout = function(){
    
    return(
        <ErrorBoundary>
            <Breadcrumbs />
            <Outlet/>
        </ErrorBoundary>
    )
}

export default ParentLayout;