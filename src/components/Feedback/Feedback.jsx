import { useEffect } from "react"

export default function Feedback({feedbacks: {good, bad, neutral}, totalFeedback, positiveFeedback}) {
    useEffect(() => {
           localStorage.setItem('feedbacks', JSON.stringify({ good, neutral, bad }));
  }, [good, neutral, bad]);
    
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