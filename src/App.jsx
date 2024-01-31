import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFoundView from "./views/NotFound";
import MainDashboard from "./views/MainDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard />,
  },
  {
    path: "*",
    element: <NotFoundView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
