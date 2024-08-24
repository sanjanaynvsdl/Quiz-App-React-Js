import React, { useState } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import ResultPage from './ResultPage';
import '../styles/Quiz.css';

const Quiz = ({ quiz, setSelectedQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 10);
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setSelectedQuiz(null);
  };

  if (showResult) {
    return <ResultPage score={score} totalQuestions={quiz.questions.length} restartQuiz={restartQuiz} />;
  }

  return (
    <div className="quiz">
      <h2>{quiz.title} Quiz</h2>
      <ProgressBar current={currentQuestionIndex + 1} total={quiz.questions.length} />
      <div className="score">Score: {score}</div>
      <Question
        question={quiz.questions[currentQuestionIndex]}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;