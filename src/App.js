import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form from "./component/OnBorad_form"
import SignIn from './component/SignIn/SignIn';
import Homepage from './component/Homepage/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/register",
    element: <Form />,
  }
])
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
