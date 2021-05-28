import React from "react";

function Parts({ part }) {
  return (
    <div>
      {part.map((parts) => (
        <ul key={parts.id}>
          <li>
            {parts.name} {parts.exercises}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Parts;
