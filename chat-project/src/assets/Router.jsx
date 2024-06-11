import Chat from "../pages/Chat";
import Login from "../pages/Login";

export default createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
        path: "/chat",
        element: <Chat />
    }
  ]);