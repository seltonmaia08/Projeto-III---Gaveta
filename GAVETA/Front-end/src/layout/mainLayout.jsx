import Header from "../components/Header/header";
import { Outlet, useLocation } from "react-router-dom";

import "./mainLayout.css";

import Footer from "../components/Footer/footer";

const MainLayout = () => {

    const location = useLocation();

    const isAdminPage =
        location.pathname.includes("ADM");

    return (
        <div className="content-main">

            <Header admin={isAdminPage} />

            <Outlet />

            {!isAdminPage && <Footer />}
            {!isAdminPage && <Header />}

        </div>
    );
};

export default MainLayout;