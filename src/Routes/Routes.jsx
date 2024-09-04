import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "bookservice/:id",
        element: <BookService />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `http://localhost:5000/services/${params.id}`
            );
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json(); // or whatever data you expect
          } catch (error) {
            console.error("Failed to fetch:", error);
            throw error; // This will be caught by React Router's ErrorBoundary
          }
        },
      },
      {
        path: "bookings",
        element: (
          <PrivateRoutes>
            <Bookings></Bookings>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
