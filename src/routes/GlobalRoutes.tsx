import React from "react";

import { Route, Routes } from "react-router-dom";

// Pages
import { BookCategory, Bookmark, Home, NotFound } from "../pages";

const GlobalRoutes = () => {
  const routes: { path: string; Component: () => JSX.Element }[] = [
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/bookmark",
      Component: Bookmark,
    },
    {
      path: "/category/:id",
      Component: BookCategory,
    },
    {
      path: "*",
      Component: NotFound,
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={<route.Component />} key={index} />
      ))}
    </Routes>
  );
};

export default GlobalRoutes;
