import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Components/Video";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/video/:videoId",
      element: <Video />,
      errorElement: <NotFoundPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={ router } />
    </>
  );
}

export default App;
