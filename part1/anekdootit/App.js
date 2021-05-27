import React, { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}> {text}</button>;
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const mostVotes = votes.indexOf(Math.max.apply(null, votes));

  // 1.12*: anekdootit step1
  // const next = () => {
  //   setSelected(selected + 1);

  // };

  // 1.13*: anecdotes step2
  // const next = () => {
  //   setSelected(selected + 1);
  //   setVote(0);
  // };

  // const incrementVote = () => {
  //   setVote(vote + 1);
  //   console.log(vote);
  // };
  // const next = () => {
  //   setSelected(selected + 1);
  // };

  const displayAncedote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteForAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]} has {votes[selected]}
        {votes[selected] === 1 ? "vote" : "votes"}
      </div>
      <Button onClick={displayAncedote} text="next Ancedotes" />
      <Button onClick={voteForAnecdote} text="Vote" />

      <div>
        <h1>Anecdote with most votes</h1>"{anecdotes[mostVotes]}" has
        {votes[mostVotes]} {votes[mostVotes] === 1 ? "vote" : "votes"}
      </div>
    </>
  );
};

export default App;
