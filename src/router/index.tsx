import { RouteObject } from "react-router-dom";
import Login from "../page/Login";
import Layout from "../layout";
import Dashboard from "../page/Dashboard";
import Order from "../page/Order";
import Product from "../page/Product";
import ProductDetails from "../page/ProductDetails";
import RotationChart from "../page/RotationChart";
import User from "../page/User";

export const routerTree: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/product",
        element: <Product />,
        children: [
          {
            path: "/product/detal/:id",
            index: true,
            element: <ProductDetails />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/rotationchart",
        element: <RotationChart />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
];
