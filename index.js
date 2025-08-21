const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Render! from Najot ta'lim 21.08.2025");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
