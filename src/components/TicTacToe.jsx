import React, { useState } from "react";
import './style/TicTacToe.css';
import WindowGame from "./WindowGame";

const TicTacToe = (props) => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [IsXNext, setIsXNext] = useState(true);
    const winner = props.winvalue(board);

    const result = document.querySelector('.result');
    const user1 = document.querySelector('.text_1');
    const user2 = document.querySelector('.text_2');


    const cellsClick = (index) =>{
        const boardCopy = [...board];

        if(winner || boardCopy[index])
        {       
            return;
        }

        boardCopy[index] = IsXNext ? 'X' : 'O';

        setBoard(boardCopy);
        setIsXNext(!IsXNext);
        props.user.step++;
        if(props.user.step==9)
        {
            props.user.result = "The resulr is draw";
            result.classList.add('active');
            props.user.step=0;
        }

        if(IsXNext)
        {
            user1.classList.remove('active');
            user2.classList.add('active');
        }
        else{
            user2.classList.remove('active');
            user1.classList.add('active');
        }
    }


    const NewGame = () =>{
        props.user.step=0;
        setBoard(Array(9).fill(null));
        const whatResult = document.querySelector('.result');
        whatResult.classList.remove('active');
    }

    return(
        <div className="main_back">
            <button className="button button--new" onClick={NewGame}>New Game</button>
            <WindowGame board={board} cellsClick={cellsClick} user={props.user} winner={winner} IsXNext={IsXNext}/> 
        </div>    
    );
}

export default TicTacToe;