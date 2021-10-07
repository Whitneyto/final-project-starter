import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): JSX.Element {
    const [score, setScore] = useState<number>(0);
    function updateScore(text:string){
        if(text === "+"){
            setScore(score + 1);
        } else{
            setScore(score - 1);
        }
    }
    return (
        
        <div className="App">
            <h1>Welcome!</h1>
            <form>Score: {score}</form>
            <button onClick = {() => updateScore("+")}>Increase Score</button>
            <button onClick = {() => updateScore("-")}>Decrease Score</button>
            <button onClick = {() =>setScore(0)}>Zero Score</button>
        </div>

    );
}

export default App;
