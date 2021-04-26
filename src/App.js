import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [textTitle, textStateFunc] = useState([
    '크론병을 앓고 있는 당신을 위한 첫번째 앱',
    '두번째 앱',
    '세번째 앱',
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>크로니</div>
      </div>
      <div>
        <div className="list">
          <div>
            <h3>{textTitle[0]}</h3>
            <p>
              0.0v 2021.04.22~<span className="like-button"> 👍0</span>
            </p>
            <hr />
          </div>
        </div>
        <div className="list">
          <div>
            <h3>{textTitle[1]}</h3>
            <p>0.0v 2021.04.22~</p>
            <hr />
          </div>
        </div>
        <div className="list">
          <div>
            <h3>{textTitle[2]}</h3>
            <p>0.0v 2021.04.22~</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
