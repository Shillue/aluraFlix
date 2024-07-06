import { VideoProvider } from "context/VideoContext";
import Inicio from "pages/Inicio";
import NovoVideo from "pages/NovoVideo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <VideoProvider>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/novovideo" element={<NovoVideo />}></Route>
                </Routes>
            </VideoProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;