import React from "react";
import './style/WindowGame.css';
import Board from "./Board";
import Players from "./Players";

const WindowGame = (props) => {
    return(
        <div className="window_game">
            <Board cells={props.board} click={props.cellsClick}/>
            <Players user={props.user} winner={props.winner} IsXNext={props.IsXNext}/>
        </div>
    );
}

export default WindowGame;