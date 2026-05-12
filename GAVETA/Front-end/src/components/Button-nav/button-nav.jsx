import './buttonNav.css'
import { NavLink } from 'react-router-dom'

const ButtonNav = ({
    title,
    color,
    colorText,
    isActive,
    onClick,
    router,
    admin
}) => {
    return (
        <NavLink
            to={router}
            style={{
                "--bg-color": color,
                "--color-text": colorText
            }}
            className={`
                button-nav
                ${isActive ? 'active' : ''}
                ${admin ? 'admin-button admin-border' : ''}
            `}
            onClick={onClick}
        >
            {title}
        </NavLink>
    )
}

export default ButtonNav