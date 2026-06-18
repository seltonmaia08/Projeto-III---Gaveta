import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './polaroide.css';

const Polaroide = ({ imagens, titulo, rotation, onClick, id }) => {
  const [colorPolaroide, setColorPolaroide] = useState(null)
  const [isPontoTuristico, setIsPontoTuristico] = useState(false)

  const location = useLocation()
  const navigation = useNavigate()

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

    if (pathName == 'ponto-turistico') {
      setIsPontoTuristico(true)
    }

  }, [location])


  return (
    <div
      className={`polaroide-card ${colorPolaroide}`}
      style={{
        "--rotation": rotation ? `${rotate}deg` : '0deg',
        marginRight: isPontoTuristico ? `${distancePolaroide}rem` : undefined
      }}
      onClick={(e) => {
        if(onClick) onClick(e);
        const path = location.pathname.slice(1)
        if (!path.includes('Dashboard')) {
          navigation(isPontoTuristico ? `/ponto-turistico-especifico/${id}` : `/visualizar-memoria/${id}`)
        };
      }}
    >
      <div
        className="photo-card"
        style={{ "--bg-image": `url(${imagens})` }}
      ></div>

      <div className="title-card-polaroide">
        <h2>{titulo}</h2>
      </div>
    </div>
  );
};

export default Polaroide;