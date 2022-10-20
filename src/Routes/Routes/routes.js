import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import BookedRoom from "../../Pages/Rooms/BookedRoom/BookedRoom";
import Rooms from "../../Pages/Rooms/Rooms/Rooms";
import SignUp from "../../Pages/SignUp/SignUp";
import { roomBooked } from "../../utilities/roomBooked";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/rooms',
                loader: () => fetch('http://localhost:5000/rooms'),
                element: <Rooms></Rooms>
            },
            {
                path: '/room/:id',
                loader: ({ params }) => roomBooked(params.id),
                element: <PrivateRoute><BookedRoom></BookedRoom></PrivateRoute>
            },
        ],
        errorElement: <div>ERROR 404 FOUND!</div>
    },
    { path: '/login', element: <Login></Login> },
    { path: '/signup', element: <SignUp></SignUp> },
]);