import css from './Feedback.module.css'

export default function Feedback({ feedbacks: { good, bad, neutral }, totalFeedback, positiveFeedback }) {
return (
        <ul className={css.list}>
            <li className={css.listItem}>Good: {good}</li>
            <li className={css.listItem}>Neutral: {neutral}</li>
            <li className={css.listItem}>Bad: {bad}</li>
            <li className={css.listItem}>Total: {totalFeedback}</li>
            <li className={css.listItem}>Positive Feedback: {positiveFeedback} %</li>
        </ul>
    )
}