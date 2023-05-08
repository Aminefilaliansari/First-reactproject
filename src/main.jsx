import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Thanks from "./containers/thanks";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "Home",
                element: <Home />,
            },
            {
                path: "About",
                element: <About />,
            },
            {
                path: "Contact",
                element: <Contact />,
            },
            {
                path: "Thanks",
                element: <Thanks />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
