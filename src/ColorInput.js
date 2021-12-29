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

    const manipulateArr = (color) => {
        document.getElementById("card-elm").style.backgroundColor = color;
        const replaceIndex = colorArr.indexOf(color)
        colorArr.splice(0, 1, colorArr.splice(replaceIndex, 1, colorArr[0])[0]);//colors are swapped
        setColor(prevState => ([...prevState]))
        //naive approach below
        /*const elm = colorArr[0]
        console.log(elm)
        colorArr[0] = colorArr[replaceIndex]
        colorArr[replaceIndex] = elm*/
        
        console.log(colorArr)
    }

    const markup = show && <Card colors={colorArr} update={manipulateArr}/>
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="color" ref={colorInput}/>
                <input type="submit" value="Add" />
            </form>
            {markup}
        </div>
    )
}

export default ColorInput
