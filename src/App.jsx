import { useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'

export default function App() {

  const [feedbacks, setFeedback] = useState(() => {
    const savedFeedbacks = localStorage.getItem('feedbacks');
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : { good: 0, neutral: 0, bad: 0 };
  });

    const updateFeedback = (feedbackType) => {
      setFeedback(prevFeedback => ({
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1
      }));
    };
    const resetFeedback = () => {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0
      });
    };
    const { good, neutral, bad } = feedbacks;
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = Math.round((good / totalFeedback) * 100);
 
    return (
      <>
        <Description />
        <Options feedbacks={feedbacks} updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
        {totalFeedback > 0 ? (<Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />) : (<p>No feedback yet</p>)}
      </>
    )
  }