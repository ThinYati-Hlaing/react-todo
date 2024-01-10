import React, { useState } from 'react'

const Input = () => {

    const [text, setText] = useState("");

    const handleInput = (event) => {
        setText(event.target.value);
    }

    return (
        <div className=''>
            <h1 className='mb-5'>Name Input</h1>
            <input type="text" className=' w-full border-2 border-gray-400 px-3 py-1 rounded-lg'
                value={text} onChange={handleInput} />
            <p>{text}</p>
        </div>
    )
}

export default Input