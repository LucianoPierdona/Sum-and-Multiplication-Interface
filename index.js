const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/multiplicacao", (req, res) => {
    res.render("multiplication")
});
app.post("/result", (req, res) => {
    const userAnswer = req.body.result;
    const sumAnswer = firstValue + secondValue;
    if(userAnswer == sumAnswer) {
        res.render("correct", {userAnswer: userAnswer});
    } else {
        res.render("sumWrong", {userAnswer: userAnswer, sumAnswer: sumAnswer});
    }
});
app.post("/multiplicationResult", (req, res) => {
    const userAnswer = req.body.result;
    const multiplicationAnswer = firstValue * secondValue;
    if(userAnswer == multiplicationAnswer) {
        res.render("correct", {userAnswer: userAnswer});
    } else {
        res.render("multiplicationWrong", {userAnswer: userAnswer, multiplicationAnswer: multiplicationAnswer});
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is Running on port 3000");
});