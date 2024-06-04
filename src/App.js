import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form from "./component/OnBorad_form"
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import Homepage from './component/Homepage/Homepage';
import BrandPage from './component/BrandPage/BrandPage';
import VerifyOTP from './component/VerifyOTP/VerifyOTP';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/verifyOTP",
    element: <VerifyOTP />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/register",
    element: <Form />,
  },{
    path: "/brand/:id",
    element: <BrandPage />,
  }
])
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
