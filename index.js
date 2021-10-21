const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from im learning node wowyu");
});

const user = [
  { id: 1, name: "Raiyan", email: "tajkier@gmail.com" },
  { id: 2, name: "Turno", email: "turno@gmail.com" },
  { id: 3, name: "Jisun", email: "jisun@gmail.com" },
  { id: 4, name: "Nayem", email: "nayem@gmail.com" },
];

app.get("/users", (req, res) => {
  if (req.query.search) {
    const searchResult = user.filter((serName) =>
      serName.name.toLowerCase().includes(req.query.search.toLowerCase())
    );
    res.send(searchResult);
  } else {
    res.send(user);
  }
});

// Data post
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = user.length + 1;
  user.push(newUser);
  console.log("hitting the post", req.body);
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  const userData = user.find((us) => us.id === Number(req.params.id));
  res.send(userData);
});

app.get("/fruits", (req, res) => {
  res.send(["mangoes", "lichi", "guavba"]);
});

app.listen(port, () => {
  console.log("hlw", port);
});
