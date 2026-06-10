import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import App from "../App"
import MainLayout from '../layout/mainLayout'
import Mural from '../pages/Mural/mural'
import PontoTuristico from '../pages/Pontos_turisticos/pontosTuristicos'
import CompartilharMemoria from '../pages/Compartilhar_memoria/CompartilharMemoria'
import Memoria from '../pages/memorias/memorias'
import VisualizarMemoria from '../pages/Memorias/vizualizarMemoria'

import PontoTuristicoEspecifico from '../pages/Ponto_Turistico_Especifico/PontoTuristicoEspecifico'
// import das paginas do adm
import LoginAdm from '../pages_adm/Login/LoginAdm'
import PostadasDashboard from '../pages_adm/Postadas/postadas'
import PendentesDashboard from '../pages_adm/Pendentes/pendentes'
import DenunciaDashboard from '../pages_adm/Denuncia/denuncia'
import MainLayoutADM from '../layout/MainLayoutADM'

import { RotaProtegidaAdmin, RotaApenasUsuario } from './RotasProtegidas'

const AppRouter = () => {
    // Mude isso depois para pegar o estado real do Firebase (ex: auth.currentUser)
    const [isAdminLogado, setIsAdminLogado] = useState(true)

    return (
        <Routes>
            {/* O Login do Admin precisa ficar desprotegido para que ele consiga fazer login */}
            <Route element={<MainLayoutADM />}>
                <Route path='/login' element={<LoginAdm setIsAdminLogado={setIsAdminLogado}/>} />
            </Route>

            {/* ROTAS PÚBLICAS E DO USUÁRIO */}
            {/* O RotaApenasUsuario bloqueia o Administrador de acessar a interface de usuário */}
            <Route element={<RotaApenasUsuario isAdmin={isAdminLogado} />}>
                <Route element={<MainLayout/>}>
                    <Route path='/' element={<Mural/>} />
                    <Route path='/memoria' element={<Memoria />} />
                    <Route path='/visualizar-memoria/:id' element={<VisualizarMemoria />} />
                    <Route path='/ponto-turistico' element={<PontoTuristico/>} />
                    <Route path='/ponto-turistico-especifico/:id' element={<PontoTuristicoEspecifico />}/>
                    <Route path='/compartilhar-memoria' element={<CompartilharMemoria />} />
                </Route>
            </Route>
            
            {/* ROTAS PROTEGIDAS DO ADMINISTRADOR */}
            {/* O RotaProtegidaAdmin bloqueia pessoas comuns de acessarem os dashboards */}
            <Route element={<RotaProtegidaAdmin isAdmin={isAdminLogado} />}>
                <Route element={<MainLayoutADM />}>
                    <Route path='/postadasDashboard' element={<PostadasDashboard />} />
                    <Route path='/pendentesDashboard' element={<PendentesDashboard />} />
                    <Route path='/denunciaDashboard' element={<DenunciaDashboard />} />
                </Route>
            </Route>

        </Routes>
    )
}

export default AppRouter