import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div className="mx-auto font-inter">
      <main className="container w-[90%] mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
