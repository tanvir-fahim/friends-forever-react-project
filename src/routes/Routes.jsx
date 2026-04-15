import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import FriendDetails from "../components/FriendDetails/FriendDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/timeline",
        Component: Timeline
      },
      {
        path: "/stats",
        element: <Stats/>
      },
      {
        path: "/friendDetails/:uniqueID",
        element: <FriendDetails/>,
        loader: () => fetch("/friendsData.json")
      }
    ],
    errorElement: <ErrorPage/>
  },
  
]);