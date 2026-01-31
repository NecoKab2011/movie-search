import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";

export const Connect = () => {
  return (
    <div>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};