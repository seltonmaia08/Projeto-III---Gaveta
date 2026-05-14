import './cardMemories.css'

const CardMemories = ({ title, description, image, tags }) => {

    return (
        <div className="card-content">
            <div 
                className="img-card"
                style={{ "--bg-image-memorie": `url(${image})`}}></div>
            <div className="text-content">
                <div className="card-title">
                    <h3>{ title }</h3>
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
    )
}

export default CardMemories