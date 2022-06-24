import React from "react";
import './style/Cells.css';


const Cells = (props) => {

    return(
        <button className="cells" onClick={props.onClick}>
            <p className="x_o">{props.value}</p>
        </button>
    );
}

export default Cells;