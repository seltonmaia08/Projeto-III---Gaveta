import { Route, Routes } from 'react-router-dom'
import App from "../App"
import MainLayout from '../layout/mainLayout'
import Mural from '../pages/Mural/mural'
import PontoTuristico from '../pages/Pontos_turisticos/pontosTuristicos'
import Memoria from '../pages/memorias/memorias'
import CompartilharMemoria from '../pages/compartilhar_memoria/compartilharMemoria'
const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Mural/>} />
                <Route path='/memoria' element={<Memoria />} />
                <Route path='/ponto-turistico' element={<PontoTuristico/>} />
                <Route path='/compartilhar-memoria' element={<CompartilharMemoria />} />
            </Route>
        </Routes>
    )
}

export default AppRouter