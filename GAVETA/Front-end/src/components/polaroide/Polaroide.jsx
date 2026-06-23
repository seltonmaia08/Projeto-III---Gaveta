import { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./polaroide.css";

import fita1 from "../../assets/imgs/fita1.png";
import fita2 from "../../assets/imgs/fita2.png";
import fita3 from "../../assets/imgs/fita3.png";
import pregador from "../../assets/imgs/pregador.png";

const fitas = [fita1, fita2, fita3];

const Polaroide = ({
  imagem,
  titulo,
  rotation,
  onClick,
  id,
  comFita,
  comPregador,
}) => {
  const [colorPolaroide, setColorPolaroide] = useState(null);
  const [isPontoTuristico, setIsPontoTuristico] = useState(false);

  const location = useLocation();
  const navigation = useNavigate();

  const randomValue = Math.floor(Math.random() * 20) - 10;
  const rotate = useMemo(() => randomValue, []);

  const distancePolaroide = useMemo(
    () => Math.abs(Math.floor(randomValue * 0.2)),
    [],
  );

  const fitaSorteada = useMemo(() => {
    const indice = Math.floor(Math.random() * fitas.length);
    return fitas[indice];
  }, []);

  useEffect(() => {
    const pathName = location.pathname.slice(1);
    const validPath = pathName.includes("Dashboard");
    if (validPath) {
      setColorPolaroide(pathName);
      console.log(pathName);
    }

    if (pathName == "ponto-turistico") {
      setIsPontoTuristico(true);
    }
  }, [location]);

  return (
    <div
      className={`polaroide-card ${colorPolaroide}`}
      style={{
        "--rotation": rotation ? `${rotate}deg` : "0deg",
        marginRight: isPontoTuristico ? `${distancePolaroide}rem` : undefined,
      }}
      onClick={(e) => {
        if (onClick) onClick(e);
        const path = location.pathname.slice(1);
        if (!path.includes("Dashboard")) {
          navigation(
            isPontoTuristico
              ? `/ponto-turistico-especifico/${id}`
              : `/visualizar-memoria/${id}`,
          );
        }
      }}
    >
      {comFita && (
        <img
          src={fitaSorteada}
          className={`fita-polaroide fita-${fitas.indexOf(fitaSorteada) + 1}`}
        />
      )}

      {comPregador && <img src={pregador} className="pregador-polaroide" />}

      <div
        className="photo-card"
        style={{ "--bg-image": `url(${imagem})` }}
      ></div>

      <div className="title-card-polaroide">
        <h2>{titulo}</h2>
      </div>
    </div>
  );
};

export default Polaroide;
