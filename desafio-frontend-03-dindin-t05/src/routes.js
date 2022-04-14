import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { getItem } from './utils/storage';
import AddingRegister from "./components/AddingRegister";

function ProtectRoutes({ redirectTo }) {
    const isAuthenticated = getItem('token');

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function MainRoutes() {

    return (
        <Routes>
            <Route path="/">
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Login />} />
            </Route>

            <Route path="/usuario" element={<Register />} />
            <Route element={<ProtectRoutes redirectTo="/" />}>
                <Route path="/transacao" element={<Home />} />
            </Route>
        </Routes>
    );
}

export default MainRoutes;