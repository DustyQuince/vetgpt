import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function History() {
    const navigate = useNavigate()
    const [answers, setAnswers] = useState({})
    const fields = [
        { id: "symptoms", prompt: "What are your pet's symptoms and how long have you noticed them?" },
        { id: "changes", prompt: "Have the symptoms changed since you started noticing them (e.g. gotten worse, gotten better, intermittent)?" },
        { id: "cause", prompt: "Can you think of anything that might have caused or triggered the symptoms?" },
        { id: "preexisting", prompt: "Does your pet have any preexisting medical conditions, and/or are they on any medication?" },
        { id: "other", prompt: "Is there any other information you think might be relevant or helpful?" }
    ]

    useEffect(() => {
        const storedAnswers = sessionStorage.getItem("answers")
        if (storedAnswers !== null) {
            setAnswers(JSON.parse(storedAnswers))
        }
    }, [])

    function generateTextAreaFields({ id, prompt }) {
        return (
            <Form.Group className="mb-3" controlId={id}>
                <Form.Label>{prompt}</Form.Label>
                <Form.Control size="lg" type="textarea" required
                    value={answers[id] ? answers[id] : ''}
                    onChange={e => {
                        let obj = {}
                        obj[id] = e.target.value
                        const newPetInfo = Object.assign({}, answers, obj)
                        setAnswers(newPetInfo)
                        sessionStorage.setItem("answers", JSON.stringify(newPetInfo))
                    }} />
            </Form.Group>)
    }

    return (
        <Container>
            <>
                <h1>
                    History and Symptoms
                </h1>
                <p>Please tell us a bit about what you have observed about the pet's health.</p>
                <Form
                    onSubmit={e => {
                        e.preventDefault()
                        navigate("/confirm")
                    }}>
                    {fields.map(generateTextAreaFields)}
                    <Button
                        style={{ marginRight: '10px' }}
                        onClick={e => { navigate("/") }}>Back</Button>
                    <Button variant="primary" type="submit"
                        style={{ marginRight: '10px' }}>
                        Submit
                    </Button>
                </Form>
            </>
        </Container>)
}