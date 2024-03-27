import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeColors } from '../features/theme.js';

function ChangeColor() {
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
  return (
    <div>
        <input type="text" onChange={(event) => {setColor(event.target.value)}}/>
        <button onClick={() => {dispatch(changeColors(color))}}>Change Color</button>
    </div>
  )
}

export default ChangeColor