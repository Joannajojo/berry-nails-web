import express from "express";

const app = express();

//Define port
const PORT = process.env.PORT || 3000;

app.use(express.json());

//Basic route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Start server
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
