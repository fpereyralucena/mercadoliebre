const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;
app.use(express.static('public'));
app.listen(PORT, ()=>console.log("server runnning http://127.0.0.1:{$PORT}"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.post("/register.html", (req, res) => {
    res.send('Recibido el formulario de registro');
})


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})
app.post("/login.html", (req, res) => {
    res.send('Recibido el formulario de login');
})

app.get("*", (req, res) => {
    res.send("Error 404 - No encontramos esta página :/");
});