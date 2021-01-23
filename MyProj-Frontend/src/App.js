import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState();

  const apibase = process.env.REACT_APP_BASE_API_URL || '/api/';
  useEffect(() => {
    let interval = setInterval(() => {
      fetch(apibase)
        .then(res => res.json())
        .then((result) => {
          setData({ cats: result })
        }).catch((error) => {
          setData({ error: error })
        })
    }, 1000);
    return () => clearInterval(interval);
  }, [apibase])

  if (!data) return <h1>Loading...</h1>;

  console.log("Endpoint: ", process.env.REACT_APP_API_V1_ENDPOINT);
  console.log("Testenv: ", process.env.TESTENV);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>My app !</h3>
        {data.error ? (
          <div className="App-error">{`Error! ${data.error}`}</div>
        ) : (
            <>
              <p>Cats:</p>
              <div>
                {data.cats.map(e => (
                  <li key={e.name}>{e.name}</li>
                ))}
              </div>
            </>
          )}
      </header>
    </div>
  );
}

export default App;
