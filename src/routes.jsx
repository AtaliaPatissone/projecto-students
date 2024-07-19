import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Students } from "./pages/Students";
import { ErrorPage } from "./pages/ErrorPage";
import {StudentInfo} from "./pages/Studentdados";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <ErrorPage/>
    },

    {
        path: '/contact',
        element: <Contact/>
    },

    {
        path: '/students',
        element: <Students/>
    },
    {
        path: '/studentInfo/:id',
        element: <StudentInfo/>
    }
])