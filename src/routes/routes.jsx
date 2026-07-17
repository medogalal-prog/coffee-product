import { createBrowserRouter } from "react-router";
import LoginPage from "@/pages/LoginPage";
import DefaultLayoutProviders from "@/providers/DefaultLayoutProviders";
import HomePages from "@/pages/HomePages";
import ProductLayoutProvides from "@/providers/ProductLayoutProvides";
import About from "@/pages/About";
import Admin from "@/pages/Admin";
import SinglePage from "@/pages/SinglePage";
export const  Routing =createBrowserRouter([
    {
        path:"/",
        element:<LoginPage/>
    },
    {
        path:"/",
        element:<DefaultLayoutProviders/>,
        children:[
            {
                path:"Home",
                element:<ProductLayoutProvides/>,
                children:[
                    {
                    index:true,
                    element:<HomePages/>
                    },
                    {
                        path:":id",
                        element:<SinglePage/>
                    }
                ]
            },
            {
                path:"/About",
                element:<About/>
            },
            {
                path:"/Admin",
                element:<Admin/>
            },
        ]
    }
])