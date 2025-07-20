export default function ResultScreen({ answersStatus }) {
    const correctCount = answersStatus.filter((a) => a === "correct").length;
    const wrongCount = answersStatus.filter((a) => a === "wrong").length;
    const noAnswerCount = answersStatus.filter((a) => a === "no-answer").length;
  
    return (
      <div className="bg-custom-blue min-h-screen flex justify-center items-start py-12">
        <section className="bg-custom-white w-[650px] rounded-xl shadow-lg p-6 text-custom-blue">
          <h1 className="text-3xl font-bold mb-6 text-center">Quiz ended</h1>
  
          <div className="bg-gray-400 bg-opacity-80 rounded-md p-3 mb-3 text-white">
            Number of correct answers: {correctCount}
          </div>
  
          <div className="bg-gray-400 bg-opacity-80 rounded-md p-3 mb-3 text-white">
            Number of wrong answers: {wrongCount}
          </div>
  
          <div className="bg-gray-400 bg-opacity-80 rounded-md p-3 mb-3 text-white">
            Number of unanswered questions: {noAnswerCount}
          </div>
        </section>
      </div>
    );
  }
  