import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <div>Home</div> },
        ]
    },
    { path: '/login', element: <Login></Login> },
    { path: '/signup', element: <SignUp></SignUp> },
]);