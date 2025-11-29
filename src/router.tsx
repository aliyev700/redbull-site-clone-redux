// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./features/pages/Home";
import Cart from "./features/pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />, // главная страница
      },
      {
        path: "cart",
        element: <Cart />, // страница корзины
      },
    ],
  },
]);
