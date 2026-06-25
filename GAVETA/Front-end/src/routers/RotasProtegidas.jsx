import { Navigate, Outlet } from 'react-router-dom';

export const RotaProtegidaAdmin = ({ isAdmin }) => {
    if (!isAdmin) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export const RotaApenasUsuario = ({ isAdmin }) => {
    if (isAdmin) {
        return <Navigate to="/postadasDashboard" replace />;
    }

    return <Outlet />;
};
