import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ErrorPage from "./Pages/ErrorPage";
import MainPage from "./Pages/MainPage";
import { createContext, useReducer } from "react";
import { getUserInitialData, userReducer } from "./Reducers/User";
import MainLayout from "./Layouts/MainLayout";
import LogoutPage from "./Pages/Snippets/LogoutPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/logout",
        element: <LogoutPage />,
      },
    ],
  },
]);

export const UserContext = createContext();

const AppWrapper = () => {
  const [userState, userDispatch] = useReducer(userReducer, getUserInitialData());

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
