import { Route, Routes, useParams } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LogInPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import PrivateRoute from "./PrivateRoute"

import { AuthContext } from "../context/auth.context"
import { useContext } from "react"

const AppRoutes = () => {
    const { user } = useContext(AuthContext)

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />}  />
            <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<h1> 404 </h1>} />
        </Routes>
    )
}

export default AppRoutes