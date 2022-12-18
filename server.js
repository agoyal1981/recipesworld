const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

let databse = [
  {
    name: "Fiona",
    work: "software engineer",
    password: "111",
  },
  {
    name: "Arun",
    work: "Student",
    password: "abc",
  },
];

app.use("/login", (req, res) => {
  let username = "";
  if (req.body.username) username = req.body.username;
  let password = "";
  if (req.body.password) password = req.body.password;

  let isPresent = false;
  let isPresnetIndex = null;

  for (let i = 0; i < databse.length; i++) {
    if (databse[i].name === username && databse[i].password === password) {
      isPresent = true;
      isPresnetIndex = i;
      break;
    }
  }
  console.log(isPresent);

  if (isPresent) {
    // If credentials are correct set and return a token
    //let token= "test123"; // note in a production level app this could be jwt or could use other strategies
    res.json({ token: 'test123'})
  } else {
    // If isPresent is false return an error
    res.json({ error: 'error message'})
  }
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);