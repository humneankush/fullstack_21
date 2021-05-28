import React from "react";
import Header from "./Header";
import Parts from "./Parts";
import Total from "./Total";

function Course({ course }) {
  return (
    <div>
      <Header name={course.name} />
      <Parts part={course.parts} />
    </div>
  );
}

export default Course;
