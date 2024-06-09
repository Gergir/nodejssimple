const express = require("express");
const app = express();
const port = 3000;

//kod JS
//ustawienie, ze moja aplikacja musi korzystac z silnika hbs
app.set("view engine", 'hbs')
//wyrenderowanie strony, gdy uzytkownik wchodzi na stronę
app.get('/', function (req, res) {
 const sample = () => {
 return 'proba'
 }
const fromAnotherFile = require("./js/func")
 res.render('index', {
 pageTitle: "Lekcja01",
 subTitle: fromAnotherFile.someTitle(),
 anotherTitle: sample(),
 hello: fromAnotherFile.sayHello(),
add: fromAnotherFile.add(2, 3)
 })
})
//wypisanie na stronie tekstu
app.get('/about', function (req, res) {
 res.send("My site")
})
// Podpięcie css
var path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));
//podpięcie js
app.use('/js', express.static(path.join(__dirname, "./js")));
//server
app.listen(port, (err) => {
 if (err) {
 return console.log("coś poszło nie tak...:", err)
 }
 console.log("serwer działa na porcie", port)
}) 