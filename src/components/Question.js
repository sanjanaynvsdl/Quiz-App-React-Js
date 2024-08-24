import React, { useState } from 'react';
import '../styles/Question.css';

const Question = ({ question, handleAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    setShowFeedback(true);
    setTimeout(() => {
      handleAnswer(option === question.correctAnswer);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }, 1500);
  };

  return (
    <div className="question">
      <h3>{question.text}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`option ${showFeedback && option === selectedAnswer
              ? option === question.correctAnswer
                ? 'correct'
                : 'incorrect'
              : ''
            }`}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>
      {showFeedback && selectedAnswer !== question.correctAnswer && (
        <div className="feedback">
          Correct answer: {question.correctAnswer}
        </div>
      )}
    </div>
  );
};

export default Question;