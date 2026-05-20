import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './polaroide.css'

const Polaroide = ({ image, title, rotation, onclick }) => {
    const rotate = useMemo(() => Math.floor(Math.random() * 20) - 10, []);
    const location = useLocation() 
    const [colorPolaroide, setColorPolaroide] = useState(null)
    
    const setColorPolaroideDiv = () => {
        const pathName = location.pathname.slice(1)
        if(pathName.includes('Dashboard')) {
            setColorPolaroide(pathName)        
        }
    }

    useEffect(() => {
        setColorPolaroideDiv()
    }, [])
    
    return (
        <div
            className={`polaroide-card ${colorPolaroide}`}
            style={{"--rotation": rotation ? `${rotate}deg` : '0deg' }}
            onClick={onclick}
        >
            <div
                className='photo-card'
                style={{ "--bg-image": `url(${image})` }}
            ></div>
            <div className='title-card-polaroide'>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Polaroide