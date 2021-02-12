import React, { useState } from 'react';
import './App.css';

// import './components/PrintHome'



function App() {
    const [dbArray, changeArray] = useState(["tarea1", "tarea2"]);



    function addList(event) {
        if (event.target.value !== "" && event.key === 'Enter') {
            changeArray(dbArray.concat(event.target.value));
            event.target.value = "";
            event.preventDefault();
        }
    }

    function deleteTask(index) {
        if (index > -1) {
            const filterData = dbArray.filter(item => item !== dbArray[index]);
            changeArray(filterData);

        }
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8 text-center">
                    <h1 id="title">toDos</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8 text-center">
                    <ul className="list-group-items">
                        <li key="-1" className="list-group item">
                            <form onSubmit={(e) => { e.preventDefault() }}>
                                <input type="text" className="input-group form-control" placeholder="What needs to be done?" onKeyPress={(e) => addList(e)} />
                            </form>
                        </li>
                        {
                            dbArray.map((item, index) => {
                                return (
                                    <li
                                        key={`"li${index}"`}
                                        className="list-group-item text-left pl-5">
                                        {item}
                                        <span
                                            id={`"${index}"`}
                                            onClick={() => { deleteTask(index) }}
                                            className="close float-right">
                                            x
                                        </span>
                                    </li>
                                )
                            }
                            )
                        }
                        <li className="list-group-item list-group-item-light text-left pl-3 min-size">
                            {dbArray.length} item{dbArray.length === 1 ? "" : "s"} left
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    );
}

export default App;
