import Header from "../components/Header/header"
import { Outlet } from 'react-router-dom'
import './mainLayout.css'
import Footer from "../components/Footer/footer"

const MainLayout = () => {
    return (
        <div className="content-main">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout