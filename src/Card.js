import React from 'react'

const Card = (props) => {
    return (
        <div className="card" id="card-elm">
            <div className="container">
                <ul>{props.colors.map((color, index) => <li key={index}>
                    <button onClick={() => props.update(color)}>{color}</button></li>)}
                </ul>
            </div>
        </div>
    )
}

export default Card
