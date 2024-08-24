import React from 'react';
import '../styles/QuizSelection.css';
import { quizzes } from '../data/quizData';

const QuizSelection = ({ setSelectedQuiz }) => {
  return (
    <div className="quiz-selection">
      <h1>MERN Stack Quiz</h1>
      <p>Test your knowledge of the MERN stack!</p>
        {/* <br></br> */}
      {/* (MongoDB, Express.js, React.js, Node.js)</p> */}
      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <button key={quiz.id} onClick={() => setSelectedQuiz(quiz)}>
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizSelection;