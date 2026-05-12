import { useMemo } from 'react';
import './polaroide.css'

const Polaroide = ({ image, title, rotation }) => {
    const rotate = useMemo(() => Math.floor(Math.random() * 20) - 10, []);
    console.log(`Card: ${title} | Rotação ativa:`, rotation);
    return (
        <div
            className='polaroide-card'
            style={{"--rotation": rotation ? `${rotate}deg` : '0deg' }}
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