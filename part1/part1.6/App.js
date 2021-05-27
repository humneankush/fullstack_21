import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setHandleGood = () => {
    setGood(good + 1);
  };
  const setHandleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const setHandleBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={setHandleGood} text="Good" />
        <Button handleClick={setHandleNeutral} text="Neutral" />
        <Button handleClick={setHandleBad} text="Bad" />
      </div>

      <h1>Statistics</h1>
      <div>
        <h5>Good {good}</h5>
        <h5>Neutral {neutral}</h5>
        <h5>Bad {bad}</h5>
      </div>
    </>
  );
};

export default App;
