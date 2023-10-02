import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    //Wherever outlet there children will go
    children: [
      {
        path: "/",
        element: <MainContainer />
      },

      {
        path: "watch",
        element: <WatchPage />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;


/**
 * App Layout - 
 * 
 * Head
 * Body
 *  SideBar
 *    MenuItems
 *  Main Container
 *    ButtonsList
 *    Video Container
 *      Video view Page
 * 
 */
