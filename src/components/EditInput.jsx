import React, { useEffect, useRef } from 'react'

const EditInput = ({ updateInput, handleUpdateInput, handleUpdateInputBlur, handleKeyupBtn }) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <div className="">
            <input ref={inputRef} value={updateInput} type="text"
                onChange={handleUpdateInput} onKeyUp={handleKeyupBtn} onBlur={handleUpdateInputBlur} className={` border border-gray-400 text-sm w-[280px] py-1 px-3`} />
        </div>
    )
}

export default EditInput