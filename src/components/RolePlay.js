import React, { useState } from 'react'
import RolePlayObject from "./RolePlayObject"

const RolePlay = () => {
    const [newArray, setNewArray] = useState([]);

    const generateRolePlay = () => {
        const randomArray = Math.floor(Math.random() * RolePlayObject.length);
        const selectedArray = [...RolePlayObject[randomArray]];
        setNewArray(selectedArray)
    }

    return (
        <div>
            <button onClick={generateRolePlay}>Generate!!!</button>
            <ul>
                {newArray.map((word, index) => (
                    <h2 key={index}>{word}</h2>
                ))}
            </ul>
        </div>
    )
}

export default RolePlay