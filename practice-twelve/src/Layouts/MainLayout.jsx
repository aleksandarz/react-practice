import Header from "../Pages/Snippets/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
