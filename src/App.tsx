import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// moved "dummy" function out of app because it doesnt need to be in there.
const getRandomColour = () => {
    // prob not the most effective way but creating an array based on hexcolor codes to then return a random colour value
    const digits = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
    ];
    // creating a new array that accept 6 digits, and mapping through the array above with math.floor. resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    const colour = new Array(6)
        .fill("")
        .map(() => digits[Math.floor(Math.random() * digits.length)])
        .join("");
    // returning a hash symbol with the colour value
    return `#${colour}`;
};
// creating an enum to store values, to make the code cleaner
enum Result {
    Correct,
    Wrong,
}

function App() {
    // important to type the things we store in the state. <string> > emptry string < would also work.
    const [colour, setColour] = useState("");
    const [answers, setAnswers] = useState<string[]>([]);
    const [result, getResult] = useState<Result | undefined>(undefined);

    // created a new helper function that i can call over and over so that when i get the right answer, the page will update and generate a new colour.
    const generateColours = () => {
        // TODO: generate a random colour
        const actualColour = getRandomColour();
        setColour(actualColour);
        setAnswers(
            [actualColour, getRandomColour(), getRandomColour()].sort(
                () => 0.5 - Math.random()
            )
        );
    };

    useEffect(() => {
        generateColours();
    }, []);

    function handleAnswerClicked(answer: string) {
        if (answer === colour) {
            // TODO: guessed the correct answer
            getResult(Result.Correct);
            // TODO: reselect colours
            generateColours();
        } else {
            // TODO: guessed the incorrect answer
            getResult(Result.Wrong);
        }
    }

    return (
        <div className="App">
            <div>
                <div
                    // create dynamic state to then interpolate the state depending on color
                    className="guess-me"
                    // colour is going to change dynamically depending on the state
                    style={{ background: colour }}
                ></div>
                {answers.map((answer) => (
                    <button
                        onClick={() => handleAnswerClicked(answer)}
                        key={answer}
                    >
                        {answer}
                    </button>
                ))}
                {result === Result.Correct && (
                    <div className="correct">Correct Answer</div>
                )}
                {result === Result.Wrong && (
                    <div className="wrong">Wrong Answer</div>
                )}
            </div>
        </div>
    );
}

export default App;
