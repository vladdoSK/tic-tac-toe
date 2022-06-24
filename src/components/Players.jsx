import React from "react";
import './style/Players.css';

const Players = (props) => {

    const whatResult = document.querySelector('.result');

    let winner_win = () =>{
        if(props.winner)
        {
            
            if(props.winner=='X')
            {
                props.user.user_1.win_1 = props.user.user_1.win_1+0.5;
                props.user.result = `The winner is ${props.user.user_1.username}`;
            }
            if(props.winner=='O')
            {
                props.user.user_2.win_2 = props.user.user_2.win_2+0.5;
                props.user.result = `The winner is ${props.user.user_2.username}`;
            }
            whatResult.classList.add('active');
        }
    }

    return (
        <div className="players">
            {winner_win()}
            <h1 className="text">Score</h1>
            <h1 className="text_1 active">{'X--> '+ props.user.user_1.username + ': ' + props.user.user_1.win_1}</h1>
            <h1 className="text_2">{'O--> '+ props.user.user_2.username + ': ' + props.user.user_2.win_2}</h1>
            <p>

            </p>
            <div className="result">
                {props.user.result}
            </div>   
        </div>
    );
}

export default Players;