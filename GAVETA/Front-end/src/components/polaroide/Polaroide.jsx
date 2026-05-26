import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './polaroide.css';

const Polaroide = ({ imagem, title, rotation, onClick }) => {
  const rotate = useMemo(() => Math.floor(Math.random() * 20) - 10, []);
  const [colorPolaroide, setColorPolaroide] = useState(null)
  const location = useLocation()


  useEffect(() => {
    const pathName = location.pathname.slice(1)
    const validPath = pathName.includes('Dashboard')
    if (validPath) {
      setColorPolaroide(pathName)
      console.log(pathName)
    }
  }, [location])
  
  return (
    <div
      className={`polaroide-card ${colorPolaroide}`}
      style={{ "--rotation": rotation ? `${rotate}deg` : '0deg' }}
      onClick={onClick}
    >
      <div
        className="photo-card"
        style={{ "--bg-image": `url(${imagem})` }}
      ></div>

      <div className="title-card-polaroide">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Polaroide;