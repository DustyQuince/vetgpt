import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function History() {
    const navigate = useNavigate()
    const [answers, setAnswers] = useState({})
    const fields = [
        { id: "symptoms", prompt: "What are your pet's symptoms and how long have you noticed them?" },
        { id: "changes", prompt: "Have the symptoms changed since you started noticing them (e.g. gotten worse, gotten better, intermittent)?"},
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
        return (<div key={id} className="form-field">
            <label htmlFor={id}>{prompt}</label>
            <textarea id={id}
                name={id}
                value={answers[id] ? answers[id] : ''}
                onChange={e => {
                    let obj = {}
                    obj[id] = e.target.value
                    const newAnswers = Object.assign({}, answers, obj)
                    setAnswers(newAnswers)
                    sessionStorage.setItem("answers", JSON.stringify(newAnswers))
                }}
                required >
            </textarea>
        </div>)
    }

    return (
        <div>
            <h1>
                History and Symptoms
            </h1>
            <p>Please tell us a bit about what you have observed about the pet's health.</p>
            <form onSubmit={e => {
                e.preventDefault
                navigate("/confirm")
            }
            }>
                {fields.map(generateTextAreaFields)}
                <button type="submit">Submit</button>
                <button onClick={e => { navigate("/") }}>Back</button>
            </form>
        </div>
    )
}