import React from 'react';
import '../styles/ResultPage.css';

const ResultPage = ({ score, totalQuestions, restartQuiz }) => {
  const maxScore = totalQuestions * 10;
  const percentage = (score / maxScore) * 100;

  return (
    <div className="result-page">
      <div className="result-container">
        <h2>Quiz Completed!</h2>
        <p>Your score: {score} out of {maxScore}</p>
        <p>Percentage: {percentage.toFixed(2)}%</p>
        <button onClick={restartQuiz}>Take Another Quiz</button>
      </div>
    </div>
  );
};

export default ResultPage;