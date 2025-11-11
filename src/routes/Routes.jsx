import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import MovieDetail from "../views/MovieDetail";
import Movies from "../views/Movies";
import RootLayout from "../views/RootLayout";

export const routes = createBrowserRouter([

    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "movies",
                element: <Movies />
            },
            {
                path: "movies/:id",
                element: <MovieDetail />
            },
        ]

    }
]
);