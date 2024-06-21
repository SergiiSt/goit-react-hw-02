import css from "../Options/Options.module.css"
export default function Options({ updateFeedback, totalFeedback, resetFeedback }) {
    return(
        <>
            <button className={css.button} onClick={() => updateFeedback('good')}>Good</button>
            <button className={css.button} onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className={css.button} onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0? (<button className={css.button} onClick={resetFeedback}>Reset</button>) : ("")}
        </>
    )
}