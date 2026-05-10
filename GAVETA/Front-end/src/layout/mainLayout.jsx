import Header from "../components/Header/header";
import { Outlet, useLocation } from "react-router-dom";

import "./mainLayout.css";

import Footer from "../components/Footer/footer";

const MainLayout = () => {

    const location = useLocation();

    const isAdminPage =
        location.pathname.includes("Dashboard");

    return (
        <div className="content-main">

            <Header admin={isAdminPage} />

            <Outlet />

            {!isAdminPage && <Footer />}

        </div>
    );
};

export default MainLayout;