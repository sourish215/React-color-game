import React, { useState, useRef } from 'react'
import Card from './Card';

const ColorInput = () => {
    const [show, setShow] = useState(false);
    const colorInput = useRef();
    const[colorArr, setColor]=useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const color = colorInput.current.value;
        //console.log(color);
        setColor(prevState => ([...prevState, color]))
        setShow(true)
    }

    //console.log('outside handleSubmit function',colorArr);

    const markup = show && <Card colors={colorArr}/>
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="color" ref={colorInput}/>
                <button>Submit</button>
            </form>
            {markup}
        </div>
    )
}

export default ColorInput
