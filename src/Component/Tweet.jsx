import "../Style/tweet.css"

function Tweet({id, name, content, like, onDelete, onLike}){

    return(
        <div className="tweet">
            <div className="tweet__content">
            <button className="delete" onClick={() => onDelete(id)}>❌</button>
            <h3>{name}</h3>
            <p>{content}</p>
            <button className="like" onClick={() => onLike(id)}>{like} ❤️</button>
            </div>
        </div>
    )
}

export default Tweet;