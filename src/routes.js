import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ParentLayout from "./components/Album";
import AlbumImages from "./components/AlbumImages";
import AllImages from "./components/AllImages";
import { ROUTES } from "./constants";
import AlbumLayout from "./components/Album/album-layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route 
                path={ROUTES.BASE_PATH} 
                element={<ParentLayout />}
                handle={{
                    crumb: () => "All albums",
                }} 
            >
                {/* <Route 
                    element={<div><Outlet /></div>}> */}
                    <Route 
                        path={ROUTES.ALBUM_IMAGES}
                        element={<AlbumImages />}
                        handle={{
                            crumb: () => "Albums Images",
                        }} 
                    />
                    <Route 
                        path={ROUTES.ALL_IMAGES} 
                        element={<AllImages />}
                        handle={{
                            crumb: () => "All Images",
                        }} 
                    />
                {/* </Route> */}
                <Route 
                    index
                    element={<AlbumLayout />}
                />
            </Route>
            <Route 
                path="/*" 
                element={<div>Not found</div>} 
            />
        </>
));

export default router;