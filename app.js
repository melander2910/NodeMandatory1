const express = require("express");
const app = express();

app.use(express.json());  

app.use(express.static("assets"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/assets/index.html");
})

app.get("/nodejs", (req, res) => {
    res.sendFile(__dirname + "/assets/nodejs.html");
})

app.get("/tools", (req, res) => {
    res.sendFile(__dirname + "/assets/tools.html");
})


app.listen(8080, (err) =>{
    if(err){
        console.log('Something bad happened');
    } else {
        console.log("Listening on port 8080");
    }
});


