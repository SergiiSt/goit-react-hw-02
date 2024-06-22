import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

export default function App() {

  const [feedbacks, setFeedback] = useState(() => {
    const savedFeedbacks = localStorage.getItem('saved-feedbacks');
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : { good: 0, neutral: 0, bad: 0 };
  });

   useEffect(() => {
           localStorage.setItem('saved-feedbacks', JSON.stringify(feedbacks));
      }, [feedbacks]);

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
    const positiveFeedback = totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
 
    return (
      <>
        <Description />
        <Options feedbacks={feedbacks} updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
        {totalFeedback > 0 ? (<Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />) : (<Notification/>)}
      </>
    )
  }