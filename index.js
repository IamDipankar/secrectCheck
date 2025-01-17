//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {
    console.log("A get / request was here");
    res.sendFile(__dirname + '/public/index.html');
});

app.get("/check", (req, res) => {
    console.log("A get /check req was here");
    res.sendFile(__dirname + '/public/index.html');
});

app.post("/check", (req, res) => {
    if (req.body.password === "IamDipankar"){
        console.log("Authentication successfull");
        res.sendFile(__dirname + '/public/secret.html');
    }else{
        console.log("Authentication failed");
        res.sendFile(__dirname + '/public/wrong_pass.html');
    }
});

app.listen(port, () => {
    console.log("server started successfully!");
})
