import React, { useState } from 'react';
import QuizSelection from './components/QuizSelection';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <div className="App">
      {!selectedQuiz ? (
        <QuizSelection setSelectedQuiz={setSelectedQuiz} />
      ) : (
        <Quiz quiz={selectedQuiz} setSelectedQuiz={setSelectedQuiz} />
      )}
    </div>
  );
}

export default App;