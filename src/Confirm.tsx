import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Confirmation() {
    const [submission, setSubmission] = useState({})

    useEffect(() => {
        const storedPetInfo = sessionStorage.getItem("petInfo")
        const storedAnswers = sessionStorage.getItem("answers")

        if (storedAnswers !== null && storedPetInfo !== null) {
            setSubmission(Object.assign(
                {}, JSON.parse(storedPetInfo), JSON.parse(storedAnswers)))
        }
    }, []
    )

    return (
        <div>
            <h2>Here's what you told us: Is this correct?</h2>
            {Object.keys(submission).map(k => (<div key={k}>
                <p className="confirmField">{k}:</p>
                <p className="confirmResponse">{submission[k]}</p>
            </div>
            ))}
        </div>
    )
}