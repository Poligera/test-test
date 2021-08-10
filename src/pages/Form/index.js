import React, { useState, useEffect } from 'react';

const Form = ({ setUsername }) => {

    const [ input, setInput ] = useState("");


    const handleInput = e => {
        setInput(e.target.value);
    }

    useEffect(() => {
        l
    })
    
    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(input);
        setInput("");
    }
    return (
        <>
            <form role="form" onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" onMouseOver={e => e.target.placeholder=''} onMouseOut={e => e.target.placeholder="Type in a city"} value={input} onChange={handleInput}/>
                <input type="submit" value="SUBMIT"/>
            </form>
        </>
    )

}

export default Form;