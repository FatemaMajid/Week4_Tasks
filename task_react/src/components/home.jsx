import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [list, setList] = useState([
        "Hello this is my first Todo.",
        "Hello this is my second Todo.",
        "Hello this is my 3rd Todo."
    ]);
    const [inputValue, setInputValue] = useState("");

    const createElement = (_list) => {
        return _list.map((item, i) => (
            <div className="center-text" id="item" key={i}>
                {item}
                <button id="delBtn" onClick={() => removeElem(i)}>x</button>
            </div>
        ));
    };

    const addItem = () => {
        if (inputValue.trim() !== "") {
            setList([...list, inputValue]);
            setInputValue("");
        }
    };

    const removeElem = (index) => {
        const updatedList = list.filter((_, i) => i !== index);
        setList(updatedList);
    };

    return (
        <main>
            <div className="container">
                <h1 className="title">Simple ToDo App.</h1>
                <p className="sub-title">This todo app is for test design.</p>
                <div className="todo-container">
                    <input
                        type="text"
                        id="text_input"
                        placeholder="Write Text here ..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button id="addBtn" onClick={addItem}>+ Add New</button>
                    <div className="line"></div>
                    <div id="list">
                        {createElement(list)}
                    </div>
                    <div className="total">
                        <p className="total_text">Total List: <span id="total">{list.length}</span></p>
                    </div>
                </div>
                <div>
                    <button id="addBtn2" onClick={addItem}>+ Add New</button>
                </div>
            </div>
        </main>
    );
};

export default Home;
