import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("...", {
      method: "PUT",
      headers: {
        Authorization: "Bearer ",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Test CORS",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log("Success", res))
      .catch((err) => console.error("Error: ", err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
