import './App.css';
import React, { useState } from 'react';
import TicTacToe from './components/TicTacToe';
import Modal from './components/Modal';

function App(props) {

  const [modalActive, setModalActive] = useState(true);

  return (
    <div>
      <TicTacToe winvalue={props.winvalue} user={props.user} />
      <Modal user={props.user} rename={props.rename}/>
    </div>

  );
}

export default App;
