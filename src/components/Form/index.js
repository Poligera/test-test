import React, { useState, useEffect } from 'react';
import './style.css';

const Form = ({updateUsername}) => {
    const [ input, setInput ] = useState("");

    const handleInput = e => {
        setInput(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateUsername(input); // A function coming from props (Repo is parent)
        setInput(""); // Clear input field
    }

    return (
        <>
            <form role="form" onSubmit={handleFormSubmit}>
                <label htmlFor="username">GitHub username: </label>
                <input type="text" id="username" name="username" placeholder="username" onMouseOver={e => e.target.placeholder=''} onMouseOut={e => e.target.placeholder="username"} value={input} onChange={handleInput}/>
                <input type="submit" value="SUBMIT"/>
            </form>
        </>
    )
}

export default Form;