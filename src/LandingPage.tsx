import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Page() {
    return (
        <div>
            <h1>Vet-GPT</h1>
            <p>Welcome to Vet-GPT, the virtual triage service to help you in making decisions about next steps in caring for your pet. Please tell us a bit about what your pet is experiencing. This information will be analyzed using a GPT-backed inference process and a next step will be recommended. You will then have the option of having a human vet give input on the case and the recommendation for a fee.</p>
            <div>
                <form onSubmit={e => {
                    e.preventDefault
                    console.log("Form values: ")
                }
                }>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="species">Species:</label>
                        <select id="species" name="species">
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="reproductive-status">Reproductive Status:</label>
                        <select id="reproductive-status" name="reproductive-status">
                            <option value="spayed">Spayed Female</option>
                            <option value="neutered">Neutered Male</option>
                            <option value="unspayed">Unspayed Female</option>
                            <option value="intact">Intact Male</option>
                            <option value="pregnant">Pregnant Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="breed">Breed:</label>
                        <input type="text" id="breed" name="breed" required />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" required />
                    </div>
                    <div>
                        <label htmlFor="age">Weight:</label>
                        <input type="number" id="weight" name="weight" required />
                        {/* <label htmlFor="weight-unit">Unit</label> */}
                        <select id="weight-unit" name="weight-unit">
                            <option value="kg">kg</option>
                            <option value="lb">lb</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {/* 
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputField">Pet's name:</label>
                <input
                    id="pet-name"
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                />
                {makeRadioOptions(reproStati)}
                <select id="repro-status" onChange={e => setRepro(e.target.value)}>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select>
                <select id="species" onChange={e => setSpecies(e.target.value)}>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select>
                <label htmlFor="history">History of the issue: when did it start, what happened before it started, have symptoms changed over time?</label>
                <div>
                    <textarea id="history" value={textValue} onChange={handleTextChange} />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="checkbox1"
                            checked={checkboxValues.checkbox1}
                            onChange={handleCheckboxChange}
                        />
                        Checkbox 1
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="checkbox2"
                            checked={checkboxValues.checkbox2}
                            onChange={handleCheckboxChange}
                        />
                        Checkbox 2
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="checkbox3"
                            checked={checkboxValues.checkbox3}
                            onChange={handleCheckboxChange}
                        />
                        Checkbox 3
                    </label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form> */}
        </div>
    );
    // return (
    // <div>
    //         <h1>Vet-GPT</h1>
    //         <p>Welcome to Vet-GPT, the virtual triage service to help you in making decisions about next steps in caring for your pet. Please tell us a bit about what your pet is experiencing. This information will be analyzed using a GPT-backed inference process and a next step will be recommended. You will then have the option of having a human vet give input on the case and the recommendation for a fee.</p>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="inputField">Reproductive Status</label>
    //     <
    //     <input
    //       id="inputField"
    //       type="radio"
    //       value={inputValue}
    //       onChange={(e) => setInputValue(e.target.value)}
    //     />
    //     <button type="submit">Submit</button>
    //     <Link to="/second">Go to the second page</Link>
    //     <Link to="/third">Go to the third page</Link>
    //   </form>
    // </div>
    // <>
    //     <div>
    //         <a href="https://vitejs.dev" target="_blank">
    //             <img src={viteLogo} className="logo" alt="Vite logo" />
    //         </a>
    //         <a href="https://reactjs.org" target="_blank">
    //             <img src={reactLogo} className="logo react" alt="React logo" />
    //         </a>
    //     </div>
    //     <h1>Vite + React</h1>
    //     <div className="card">
    //         <button onClick={() => setCount((count) => count + 1)}>
    //             count is {count}
    //         </button>
    //         <p>
    //             Edit <code>src/App.tsx</code> and save to test HMR
    //         </p>
    //     </div>
    //     <p className="read-the-docs">
    //         Click on the Vite and React logos to learn more
    //     </p>
    // </>
}