import { useState } from "react";
import questions from "../questions";
import ProgressBar from "./ProgressBar";
import QuestionBox from "./QuestionBox";
import ResultScreen from "./ResultScreen";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersStatus, setAnswersStatus] = useState(
    Array(questions.length).fill("no-answer")
  );

  const currentQuestion = questions[currentQuestionIndex];
  const isQuizFinished = currentQuestionIndex >= questions.length;

  function goToNextQuestion(status) {
    setAnswersStatus((prev) => {
      const newStatus = [...prev];
      newStatus[currentQuestionIndex] = status;
      return newStatus;
    });
  
    const delay = status === "no-answer" ? 0 : 2000;
    setTimeout(() => setCurrentQuestionIndex((prev) => prev + 1), delay);
  }
  

  if (isQuizFinished) {
    return <ResultScreen answersStatus={answersStatus} />;
  }

  return (
    <div className="bg-custom-blue min-h-screen flex justify-center items-start py-12">
      <section className="bg-custom-white w-[650px] rounded-xl shadow-lg p-6">
        <ProgressBar
          key={currentQuestionIndex}
          timer={10000}
          onTimeout={() => goToNextQuestion("no-answer")}
        />

        <h1 className="text-xl font-bold mb-4">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h1>

        <QuestionBox
          question={currentQuestion}
          onAnswer={goToNextQuestion}
        />
      </section>
    </div>
  );
}
