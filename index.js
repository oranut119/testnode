

const fs = require("fs").promises;
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");
var mysql = require('mysql');
bodyParser = require('body-parser');



var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database: "bank"
});

con.connect();

// con.connect(function(err) {
//     if(err) throw err;
//     console.log("Connectede!");
//     sql = "SELECT * FROM department";
//     con.query(sql, function (err, result){
//         if(err) throw err;
//         console.log("TEST", result);
        
//     })
// })

const app = express();

app.use(express.json());
//app.use(express.cors());


// app.get("/outfir", (req, res) => {
//     const tops = ["Alice", "Place", "Greu"];
//     const jeanse = ["ASDF", "DERT", "DDDD"];
//     const FERE = [" FFFRRR" , "kklskdlsd"]
//     // res.send("This is Working");
//     res.json({
//         tops: _.sample(tops),
//         jeanse: _.sample(jeanse),
//         FERE: _.sample(FERE)
//     })
// })

// app.get("/comments/:id", async (req, res) => {
//     const id = req.params.id;
//     let content;

//     try {
//         content = await fs.readFile(`data/comment/${id}.txt`, "utf-8");
//     }catch (err) {
//         // ToDO deal witg later
//     }

//     res.json({
//         content: content
//     })

// })
// app.post("/comments", async (req, res) => {
//     const id = uuid();
//     const conttent = req.body.conttent;
//     if(!conttent){
//         return res.sendStatus(400);
//     }
//     await fs.mkdir("data/comment", { recursive:  true});
//     await fs.writeFile(`data/comment/${id}.txt`, conttent);

//     res.status(200).json({
//         id : id
//     });
// });


app.listen(3000, () => console.log("API START Running"));

app.use(bodyParser.json());

var shoplist = require('./routes/shoplistRoutes');
app.use('/static', express.static('public'));
app.use('/shop', shoplist.use('/',shoplist));

module.exports = app;