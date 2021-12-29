import React from 'react'

const Card = (props) => {
    //const btns = props.colorArr.map(color => <button>{color}</button>)
    
    return (
        <div className="card">
            <div className="container">
                <h1>The colors are: {props.colors.join(",")}</h1>
            </div>
        </div>
    )
}

export default Card
