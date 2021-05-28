import React from "react";

const Total = ({ parts }) => {
  const sum = parts.reduce(
    (accumlator, current) => accumlator + current.exercises,
    0
  );

  return (
    <p>
      <b>Total of exercises{sum}</b>
    </p>
  );
};

export default Total;
