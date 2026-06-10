import { useNavigate } from "react-router-dom"
import './cardMemories.css'

const CardMemories = ({ titulo, descricao, imagem, tags, id, onClick }) => {

    const navigation = useNavigate()

    return (
        <div className="card-content"
            onClick={() => {
                navigation(`/visualizar-memoria/${id}`);
                onClick
            }}
        >
            <div
                className="img-card"
                style={{ "--bg-image-memorie": `url(${imagem})` }}></div>
            <div className="text-content">
                <div className="card-title">
                    <h3>{titulo}</h3>
                </div>
                <div className="tags-card">
                    {
                        tags.map((tag) =>
                            <p className="tag-card-m" key={tag}>{tag}</p>
                        )
                    }
                </div>
                <div className="description">
                    <p>{descricao}</p>
                </div>

            </div>
        </div>
    )
}

export default CardMemories