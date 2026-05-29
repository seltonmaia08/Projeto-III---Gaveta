import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './polaroide.css';

const Polaroide = ({ imagem, titulo, rotation, onClick, id }) => {
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
    <Link
      to={`/visualizar-memoria/${id}`}
      className='card-link'
    >
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
          <h2>{titulo}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Polaroide;