import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/404";
import Home from "../pages/home";
import DetailFilm from "../pages/detailFilm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/mentions-legales", element: <MentionLegales /> },
      { path: "/detailFilm/:idFilm", element: <DetailFilm /> },
    ],
  },
]);

export default router;