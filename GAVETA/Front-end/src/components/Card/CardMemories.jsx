import { Link } from "react-router-dom"
import './cardMemories.css'

const CardMemories = ({ title, description, imagem, tags, id }) => {

    console.log(id)

    return (
        <Link
            to={`/visualizar-memoria/${id}`}
            className='card-link'
        >
            <div className="card-content">
                <div
                    className="img-card"
                    style={{ "--bg-image-memorie": `url(${imagem})` }}></div>
                <div className="text-content">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="tags-card">
                        {
                            tags.map((tag) =>
                                <p key={tag}>{tag}</p>
                            )
                        }
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>

                </div>
            </div>

        </Link>
    )
}

export default CardMemories