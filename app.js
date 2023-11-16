const express = require('express');
const app = express();
const path = require('path');
const PORT_LISTENING = 3000
app.use(express.static('public'));
app.listen(PORT_LISTENING, ()=>console.log("server runnning http://127.0.0.1:"+PORT_LISTENING));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get("*", (req, res) => {
    res.send("Error 404 - No encontramos esta página :/");
});