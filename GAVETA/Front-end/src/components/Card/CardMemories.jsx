import { useNavigate } from "react-router-dom"
import './cardMemories.css'

const CardMemories = ({ titulo, relatoMemoria, imagensURL, tags, id, onClick }) => {

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
                style={{ "--bg-image-memorie": `url(${imagensURL})` }}></div>
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
                    <p>{relatoMemoria}</p>
                </div>

            </div>
        </div>
    )
}

export default CardMemories