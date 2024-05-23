import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'F. Scott Fitzgerald', 'Ernest Hemingway', 'Mark Twain'],
      answer: 'Harper Lee'
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'NaCl', 'O2'],
      answer: 'H2O'
    },
    {
      question: 'What is the largest planet in our Solar System?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Jupiter'
    }
  ];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz completed
      alert(`Quiz completed! Your score: ${score + 1} out of ${questions.length}`);
      window.location.reload(); // Refresh the page to restart the quiz
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4 shadow-sm w-100" style={{ maxWidth: '500px' }}>
        <h1 className="text-center mb-4">Quiz App</h1>
        <div>
          <div className="d-flex justify-content-between mb-3">
            <span>Question {currentQuestion + 1}/{questions.length}</span>
            <span>Score: {score}</span>
          </div>
          <h2 className="mb-3">Question {currentQuestion + 1}</h2>
          <p className="mb-4">{questions[currentQuestion].question}</p>
          <div className="d-flex flex-column">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="btn btn-primary mb-2"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
