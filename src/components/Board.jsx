import React from "react";
import Cells from "./Cells";
import './style/Board.css';

const Board = ({ cells, click }) => {
    return (
        <div className="board">
            {
                cells.map((cell, i) => (
                    <Cells key={i} value={cell} onClick={() => click(i) } />
                ))
            }
        </div>
    );
}

export default Board;