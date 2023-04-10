import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Page() {
    const navigate = useNavigate()
    const [petInfo, setPetInfo] = useState({})

    useEffect(() => {
        const storedPetInfo = sessionStorage.getItem("petInfo")
        if (storedPetInfo !== null) {
            setPetInfo(JSON.parse(storedPetInfo))
        }
    }, [])

    const dropdowns = [
        { id: "species", options: ["", "dog", "cat"], label: "Species" },
        { id: "repro", options: ["", "spayed female", "intact female", "neutered male", "intact male"], label: "Reproductive Status:" }
    ]

    const inputs = [
        { id: "name", type: "text", label: "Name:" },
        { id: "age", type: "number", label: "Age:" },
        { id: "breed", type: "text", label: "Breed:" },
        { id: "weight", type: "number", label: "Weight:" },
    ]

    function makeDropdown({ id, options, label }) {
        return (<div key={id} className="form-field">
            <label htmlFor={id}>{label}</label>
            <select id={id}
                name={id}
                value={petInfo[id] ? petInfo[id] : ''}
                className="form-field"
                onChange={e => {
                    let obj = {}
                    obj[id] = e.target.value
                    const newPetInfo = Object.assign({}, petInfo, obj)
                    setPetInfo(newPetInfo)
                    sessionStorage.setItem("petInfo", JSON.stringify(newPetInfo))
                }}
                required>
                {options.map(o => <option value={o} key={o}>{o}</option>)}
            </select>
        </div>
        )
    }

    function makeInputElement({ id, type, label }) {
        return (
            <div key={id} className="form-field">
                <label htmlFor={id}>{label}</label>
                <input type={type}
                    id={id}
                    name={id}
                    value={petInfo[id] ? petInfo[id] : ''}
                    className="form-field"
                    onChange={e => {
                        let obj = {}
                        obj[id] = e.target.value
                        const newPetInfo = Object.assign({}, petInfo, obj)
                        setPetInfo(newPetInfo)
                        sessionStorage.setItem("petInfo", JSON.stringify(newPetInfo))
                    }}
                    required />
            </div>
        )
    }

    return (
        <div>
            <h1>Vet-GPT</h1>
            <p>Welcome to Vet-GPT, the virtual triage service to help you in making decisions about next steps in caring for your pet. Please tell us a bit about what your pet is experiencing. This information will be analyzed using a GPT-backed inference process and a next step will be recommended. You will then have the option of having a human vet give input on the case and the recommendation for a fee.</p>
            <div>
                <form onSubmit={e => {
                    e.preventDefault
                    navigate("/history")
                }
                }>
                    {dropdowns.map(makeDropdown)}
                    {inputs.map(makeInputElement)}
                    {makeDropdown({ id: "unit", options: ["kg", "lb"], label: "" })}
                    <button type="submit">Next</button>
                </form>
            </div>
        </div>
    )
}