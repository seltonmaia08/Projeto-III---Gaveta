import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './polaroide.css';

const Polaroide = ({ imagem, titulo, rotation, onClick, id }) => {
  const [colorPolaroide, setColorPolaroide] = useState(null)
  const [isPontoTuristico, setIsPontoTuristico] = useState(false)

  const location = useLocation()

  const randomValue = Math.floor(Math.random() * 20) - 10
  const rotate = useMemo(() => randomValue, []);

  const distancePolaroide = useMemo(() => Math.abs(Math.floor(randomValue * .2)), [])

  useEffect(() => {
    const pathName = location.pathname.slice(1)
    const validPath = pathName.includes('Dashboard')
    if (validPath) {
      setColorPolaroide(pathName)
      console.log(pathName)
    }

    if(pathName == 'ponto-turistico'){
      setIsPontoTuristico(true)
    }

  }, [location])

  return (
    <Link
      to={`/visualizar-memoria/${id}`}
      className='polaroide-link'
      style={{
          "--rotation": rotation ? `${rotate}deg` : '0deg',
        }}  
    >
      <div
        id='polaroide'
        className={`polaroide-card ${colorPolaroide}`}
        style={{
          "--rotation": rotation ? `${rotate}deg` : '0deg',
          marginRight: isPontoTuristico ? `${distancePolaroide}rem` : undefined
        }}
        onClick={onClick}
      >
        <div
          className="photo-card"
          style={{ "--bg-image": `url(${imagem})` }}
        ></div>

        <div className="title-card-polaroide">
          <h2>{titulo}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Polaroide;