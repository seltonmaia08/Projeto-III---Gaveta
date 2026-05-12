import Header from "../components/Header/header";
import { Outlet, useLocation } from "react-router-dom";

import "./mainLayout.css";

import Footer from "../components/Footer/footer";

const MainLayoutADM = () => {

    const location = useLocation()

    return (
        <div className="content-main">
            {
                location.pathname === '/login'
                ?
                <></>
                :
                <Header admin={true}/>
            }
            <Outlet />
        </div>
    );
};

export default MainLayoutADM