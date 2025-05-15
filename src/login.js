import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import confetti from 'canvas-confetti';

const questions = [
  {
    question: "🌸 What's the nickname you call me?",
    answer: "punda",
  },
  {
    question: "👀 Who do I trust blindly?",
    answer: "vasundhara",
  },
  {
    question: "💗 What do I often used to call you?",
    answer: "chellame",
  },
];

  const launchConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffb6c1', '#b388eb', '#ffcba4', '#a0e7e5']
    });
  };

const LoginQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (input.trim().toLowerCase() === questions[current].answer.toLowerCase()) {
      setError("");
      setInput("");
      if (current + 1 === questions.length) {
        navigate("/surprise");
        launchConfetti();
      } else {
        setCurrent(current + 1);
      }
    } else {
      setError("Oops! Try again, Dear ❤️");
    }
  };
  


  return (
    <section className="body">
    <div className="quiz-container">
      <h2 className="question">{questions[current].question}</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="quiz-input"
        placeholder="Type your answer here..."
      />
      <button className="quiz-button" onClick={handleSubmit}>
        Next 💌
      </button>
      {error && <p className="error">{error}</p>}
    </div>
    </section>
  );
};

export default LoginQuiz;
