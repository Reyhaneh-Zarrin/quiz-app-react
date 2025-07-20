import { useState, useEffect } from "react";

export default function QuestionBox({ question, onAnswer }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [question]);

  function handleAnswerClick(index) {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
    onAnswer(index === question.correctAnswerIndex ? "correct" : "wrong");
  }

  return (
    <>
      <h2 className="text-lg mb-6">{question.text}</h2>
      <div className="flex flex-col gap-4">
        {question.answers.map((answer, index) => {
          const isSelected = selectedIndex === index;
          const isCorrect = index === question.correctAnswerIndex;
          
          let buttonClass = "bg-white border border-gray-300 hover:bg-gray-100";

          if (selectedIndex !== null && isSelected) {
            buttonClass = isCorrect
              ? "bg-green-400 text-white"
              : "bg-red-400 text-white";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={selectedIndex !== null}
              className={`rounded-md px-4 py-2 text-left transition-colors duration-300 ${buttonClass}`}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </>
  );
}
