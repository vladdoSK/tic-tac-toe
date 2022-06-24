import React from "react";
import './style/Modal.css';

const Modal = (props) => {

    const closeModal = () =>{
        const modal = document.querySelector('.modal');
        const player1 = document.getElementById('player1').value;
        const player2 = document.getElementById('player2').value;
        const empty_name = document.querySelector('.empty');

        if(player1 =='' || player2 =='')
        {
            empty_name.classList.add('active');
        }
        else{
            modal.classList.add('active');
            props.rename(player1, player2);
        }
    }

    return(
        <div className="modal" >
            <div className="modal_content">

                <h1 className="greeting">HELLO, please enter yours name:</h1>

                <div className="block_name">
                    <div className="block_name_1">
                        <h1 className="name">Player 1:</h1>
                        <input id="player1" className="input_name"></input>
                    </div>
                    <div className="block_name_1">
                        <h1 className="name">Player 2:</h1>
                        <input id="player2" className="input_name"></input>
                    </div>
                </div>

                <h1 className="empty">Please fill in all fields</h1>

                <button className="button" onClick={closeModal}>Okey</button>
            </div>
        </div>
    );
}

export default Modal;