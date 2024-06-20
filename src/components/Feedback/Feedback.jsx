import { useEffect } from "react"

export default function Feedback({feedbacks: {good, bad, neutral}, totalFeedback, positiveFeedback}) {
    useEffect(() => {
        localStorage.setItem("good-feedbacks", good)
    }, [good]);
    useEffect(() => {
        localStorage.setItem('neutral-feedback', neutral)
    }, [neutral]);
    useEffect(() => {
        localStorage.setItem('bad-feedbacks', bad)
    }, [bad]);
    
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive Feedback: {positiveFeedback} %</p>
        </div>
    )
}