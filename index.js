import express from "express";
import Time from "./src/Time.js";
const app = express()
const port = 3000


function GetHora(){
    app.get('/', (req, res) => {
        const time = new Time();
        res.send(`La hora actual es: ${time.getTime()}`);
    })
}



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    GetHora();
}   )