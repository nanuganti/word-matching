import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [matchingScore, setMatchingScore] = useState();
  const getMatchingScore = () => {
    //call the api servicde
    axios.get("http://test.").then(
      setMatchingScore(res.data)
    )
  }
  //useEffect()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label>first String </label>
        <input type="text" ></input>
        <label>second String </label>
        <input type="text" ></input>
        <button onClick={getMatchingScore}></button>
        <p>{matchingScore}</p>
      </header>
    </div>
  );
}

export default App;
