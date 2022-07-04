import React, { useState } from 'react'

const Textutils = (props) => {

    const [text, setText]= useState("")

    const handleUp=()=>{
        setText(text.toUpperCase())
    }
    const handleLower=()=>{
        setText(text.toLowerCase())
    }
    const handleClear=()=>{
        setText('')
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    return (
        <div className={`container text-${props.mode==='dark' ? 'light' : 'dark'}`}>
            <div className="form-group  mt-4">
                <h1>Type your text here :</h1>
                <textarea className='form-control' style={{backgroundColor: props.mode==='dark' ? '#13466e' : 'white', color: props.mode==='dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className='mb-4'>
                <button disabled={text.length===0} className="btn btn-primary mb-3" onClick={handleUp}>Upper case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleLower}>Lower case</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
            </div>
            <div>
                <h2>Your text summary</h2>
                <p>{(text.length)=== 0 ? 0 : text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{(text.length)=== 0 ? 0 : 0.008*text.trim().split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Textutils
