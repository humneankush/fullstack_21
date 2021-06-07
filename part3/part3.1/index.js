const http = require("http");
const express = require("express");

const app = express();

let persons = [
  {
    id: 1,
    name: "Arto hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-64-23-122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});
const PORT = 3001;
app.listen(PORT);
console.log(`listinig on port ${PORT}`);
