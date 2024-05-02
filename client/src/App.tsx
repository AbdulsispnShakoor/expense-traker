import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Dashboard/Home";
import Layout from "./pages/Layout/Layout";
import PageNotFound from "./pages/Error/PageNotFound";
import Auth from "./pages/Auth/Auth";

// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
const App = () => {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App