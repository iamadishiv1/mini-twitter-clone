import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css';
import './App.css';
import Home from "./page/Home/Home";
import Profile from "./page/Profile/Profile";
import Explore1 from "./page/Explore1/Explore1";
import Signin from "./page/Signin/Signin";
import Navbar from "./components/Navbar/Navbar";
import More from "./page/More/More";
import Error from "./page/Error/Error";

const Layout = () => {
  return (
    <div className="md:w-8/12 mx-auto">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
      {
        path: '/explore',
        element: <Explore1 />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/signout',
        element: <Signin />,
      },
      {
        path: '/more',
        element: <More />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
