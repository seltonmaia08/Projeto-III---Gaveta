import { useState } from 'react'
import './buttonNav.css'
import { NavLink } from 'react-router-dom'

const ButtonNav = ({ title, color, colorText, isActive, onClick, router }) => {
    return <NavLink
        to={router}
        style={{ "--bg-color": `${color}`, "--color-text": `${colorText}` }}
        className={`button-nav ${isActive ? 'active' : ''}`}
        onClick={onClick}>
        {title}
    </NavLink>
}

export default ButtonNav