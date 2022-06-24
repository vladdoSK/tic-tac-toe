import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import state, { WinValue } from './redux/state';
import store, { rename, reRender, state } from './redux/state'


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderReact = () => {
  root.render(
    <React.StrictMode>
      <App winvalue={store.WinValue} user={state} rename={rename} />
    </React.StrictMode>
  );
}

renderReact(state);

reRender(renderReact);
