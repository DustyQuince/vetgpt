import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


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
    ]

    function makeDropdown({ id, options, label }) {
        return (
            <>
                <Form.Group className="mb-3" controlId="formBasicEmail" key={id}>
                    <Form.Label>{label}</Form.Label>
                    <Form.Select size="lg" required
                        value={petInfo[id] ? petInfo[id] : ''}
                        onChange={e => {
                            let obj = {}
                            obj[id] = e.target.value
                            const newPetInfo = Object.assign({}, petInfo, obj)
                            setPetInfo(newPetInfo)
                            sessionStorage.setItem("petInfo", JSON.stringify(newPetInfo))
                        }}>
                        {options.map(o => <option key={o}>{o}</option>)}
                    </Form.Select>
                </Form.Group>
            </>)
    }

    function makeInputElement({ id, type, label }) {
        return (
            <Form.Group className="mb-3" controlId={id}>
                <Form.Label>{label}</Form.Label>
                <Form.Control size="lg" type={type} required
                    value={petInfo[id] ? petInfo[id] : ''}
                    onChange={e => {
                        let obj = {}
                        obj[id] = e.target.value
                        const newPetInfo = Object.assign({}, petInfo, obj)
                        setPetInfo(newPetInfo)
                        sessionStorage.setItem("petInfo", JSON.stringify(newPetInfo))
                    }} />
            </Form.Group>
        )
    }

    return (
        <Container as="main">
            <h1>Vet-GPT</h1>
            <p>Welcome to Vet-GPT, the virtual triage service to help you in making decisions about next steps in caring for your pet. Please tell us a bit about what your pet is experiencing. This information will be analyzed using a GPT-backed inference process and a next step will be recommended. You will then have the option of having a human vet give input on the case and the recommendation for a fee.</p>
            <Form onSubmit={e => {
                e.preventDefault
                navigate("/history")
            }
            }>
                {dropdowns.map(makeDropdown)}
                {inputs.map(makeInputElement)}
                <Row>
                    <Form.Group className="mb-3" controlId="weight" as={Col}>
                        <Form.Label>Weight</Form.Label>
                        <Form.Control size="lg" type="number" required
                            value={petInfo["weight"] ? petInfo["weight"] : ''}
                            onChange={e => {
                                let obj = {}
                                obj["weight"] = e.target.value
                                const newPetInfo = Object.assign({}, petInfo, obj)
                                setPetInfo(newPetInfo)
                                sessionStorage.setItem("petInfo", JSON.stringify(newPetInfo))
                            }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="unit" as={Col}>
                        <Form.Label>Unit</Form.Label>
                        <Form.Select size="lg" required as={Col}
                            value={petInfo["unit"] ? petInfo["unit"] : ''}
                            onChange={e => {
                                let obj = {}
                                obj["unit"] = e.target.value
                                const newPetInfo = Object.assign({}, petInfo, obj)
                                setPetInfo(newPetInfo)
                                sessionStorage.setItem("petInfo", JSON.stringify(newPetInfo))
                            }}>
                            <option>kg</option>
                            <option>lb</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" onSubmit={e => {
                    e.preventDefault()
                    navigate("/history")
                }}>
                    Next
                </Button>
            </Form>
        </Container >
    )
}