import React from "react";

export const Counters = ({text, num, setNum}: {text:string, num:number, setNum:(num:number) => void}):JSX.Element =>{
    function updateScore(text:string):void{
        if(text === "+"){
            setNum(num + 1);
        } else{
            setNum(num - 1);
        }
    }
    return(
        <div>
            <form>{text}: {num}</form>
            <button onClick = {()=>updateScore("+")}>Increase Score </button>
            <button onClick = {()=>updateScore("-")}>Decrease Score </button>
        </div>
    );


};