const express = require("express");
const app = express();
const userRouter = require("./routes/user");

const mongoose = require("mongoose");

app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(
    "mongodb+srv://pa7846665:Kg5IBCywl6aWxZSb@cluster0.ephgmjr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
