import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Album from "./components/Album";
import AlbumImages from "./components/AlbumImages";
import AllImages from "./components/AllImages";
import { ROUTES } from "./constants";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route 
                path={ROUTES.BASE_PATH} 
                element={<Album />}
                handle={{
                    crumb: () => "All albums",
                }} 
            >
                <Route 
                    element={<div><Outlet /></div>}>
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
                </Route>
            </Route>
            <Route 
                path="/*" 
                element={<div>Not found</div>} 
            />
        </>
));

export default router;