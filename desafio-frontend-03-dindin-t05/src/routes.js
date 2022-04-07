import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function MainRoutes() {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/usuario" element={<Register />} />
        </Routes>
    );
}

export default MainRoutes;