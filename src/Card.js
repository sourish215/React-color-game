import React from 'react'

const Card = (props) => {
    const btns = props.colors.map((color, index) => <li key={index}><button>{color}</button></li>)
    
    return (
        <div className="card">
            <div className="container">
                <ul>{btns}</ul>
            </div>
        </div>
    )
}

export default Card
