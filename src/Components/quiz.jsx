import { useState } from "react";
import Results from "./Results";

function Quiz() {
    const questionBank = [
        {
            question:"What is the largest lake in the world?",
            options:["Caspian Sea" ,"Baikal", "Lake Superior", "Ontario"],
            answer: "Caspian Sea"
        },
        {
            question:"Which planet in the solar system is known as the “Red Planet”?",
            options:["Venus", "Earth", "Mars", "Jupiter"],
            answer:"Mars"
        },
        {
            question:"Which river is the longest in the world?",
            options:["Amazon","Mississippi","Nile", "Yangtze"],
            answer:"Nile"
        }
        
    ]
    const intialAnswers = [null, null, null]
    const [userAnswers, setUserAnswers] = useState(intialAnswers);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const selectedAnswer = userAnswers[currentQuestion];
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    function handleSelectOption(option) {
        const newUserAnswers =[...userAnswers];
        newUserAnswers[currentQuestion] = option;
        setUserAnswers(newUserAnswers)

    }
    function goToNext(){
        if(currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true)
;        } else{
        setCurrentQuestion(currentQuestion +1);
        }
    }
    function goToPreviuos(){
        if(currentQuestion > 0){
        setCurrentQuestion(currentQuestion -1);
        }

    }
    function restartQuiz() {
        setUserAnswers(intialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }
    if (isQuizFinished) {
        return <Results userAnswers={userAnswers} questionBank={questionBank} restartQuiz = {restartQuiz} />

    }
    return (
        <div className="quiz-card">
            <h2>Question {currentQuestion +1}</h2>
            <p>{questionBank[currentQuestion].question}</p>
            {questionBank[currentQuestion].options.map((option) => (
                <button className={`option ${selectedAnswer === option ? 'selected' : ''}`} onClick={() => handleSelectOption(option)}>
                    {option}
                    </button>
            ))}
            <div className="actions">
                <button  onClick={goToPreviuos} disabled ={currentQuestion === 0}>Previous</button>
            <button onClick={goToNext} disabled ={!selectedAnswer}>
                {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
                </button>
            </div>
            
        </div>
    )

}
export default Quiz;