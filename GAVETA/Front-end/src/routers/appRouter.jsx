import { Route, Routes } from 'react-router-dom'
import App from "../App"
import MainLayout from '../layout/mainLayout'
import Mural from '../pages/Mural/mural'
import PontoTuristico from '../pages/Pontos_turisticos/pontosTuristicos'
import Memoria from '../pages/memorias/memorias'
import CompartilharMemoria from '../pages/compartilhar_memoria/compartilharMemoria'

// import das paginas do adm
import LoginAdm from '../pages_adm/Login/LoginAdm'
import PostadasDashboard from '../pages_adm/Postadas/postadas'
import PendentesDashboard from '../pages_adm/Pendentes/pendentes'
import DenunciaDashboard from '../pages_adm/Denuncia/denuncia'
import MainLayoutADM from '../layout/MainLayoutADM'

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Mural/>} />
                <Route path='/memoria' element={<Memoria />} />
                <Route path='/ponto-turistico' element={<PontoTuristico/>} />
                <Route path='/compartilhar-memoria' element={<CompartilharMemoria />} />


            </Route>
            {/* Rotas do administrador, depois mudar a forma de acesso */}
            <Route element={<MainLayoutADM />}>
                <Route path='/login' element={<LoginAdm />} />
                <Route path='/postadasDashboard' element={<PostadasDashboard />} />
                <Route path='/pendentesDashboard' element={<PendentesDashboard />} />
                <Route path='/denunciaDashboard' element={<DenunciaDashboard />} />
            </Route>
        </Routes>
    )
}

export default AppRouter

// import { Routes, Route } from "react-router-dom";

// import MainLayout from "../layout/mainLayout";

// import Mural from "../pages/Mural";
// import Memoria from "../pages/Memoria";

// import PostadasDashboard from "../pages/admin/PostadasDashboard";
// import PendentesDashboard from "../pages/admin/PendentesDashboard";
// import DenunciaDashboard from "../pages/admin/DenunciaDashboard";

// const AppRouter = () => {
//     return (
//         <Routes>

//             <Route element={<MainLayout />}>

//                 {/* públicas */}
//                 <Route path="/" element={<Mural />} />
//                 <Route path="/memoria" element={<Memoria />} />

//                 {/* admin */}
//                 <Route
//                     path="/postadasDashboard"
//                     element={<PostadasDashboard />}
//                 />

//                 <Route
//                     path="/pendentesDashboard"
//                     element={<PendentesDashboard />}
//                 />

//                 <Route
//                     path="/denunciaDashboard"
//                     element={<DenunciaDashboard />}
//                 />

//             </Route>

//         </Routes>
//     );
// };

// export default AppRouter;