import logo from "../assets/cartoon-doodle-font-quiz-png.webp"

export default function Header() {
    return (
        <div className="flex flex-col items-center mb-0 pb-0 bg-custom-blue">
            <img src={logo} className="w-20 h-20 object-contain mb-1" />
            <h1 className="text-xl font-bold">Quiz</h1>
        </div>
    );
}
