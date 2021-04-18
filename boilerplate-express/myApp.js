var express = require('express');
var app = express();
const bodyparser = require("body-parser");

console.log("Hello World");

// app.get('/', (req, res) => {
// 	res.send('Hello Express');
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(bodyparser.urlencoded({extended: false}))

app.use((req, res, next) => {
  let string = `${req.method} ${req.path} - ${req.ip}`
  console.log(string)
  next();
});

app.use("/public", express.static(__dirname + "/public"));

// app.get("/json", (req, res) => {
//   res.json({
//     message: "Hello json"
//   });
// });

process.env.MESSAGE_STYLE='uppercase';
app.get('/json', function(req, res){

if(process.env.MESSAGE_STYLE==='uppercase'){
  res.json({
  "message": "HELLO JSON"
  })
} else {
    res.json({
      "message": "Hello json"
      })
  };
});

app.get("/now", (req,res,next) => {
  req.time = new Date().toString()
  next()
}, (req,res)=> {
  res.send({"time": req.time})
})

app.get("/:word/echo", (req,res) => {
  res.send({
    "echo":req.params.word
  });
});

app.route("/name")
    .get((req,res) => {
      res.send({"name": req.query.first + " " + req.query.last})
    })
    .post((req,res) => {
      res.send({"name": req.body.first + " " + req.body.last})
    });





















 module.exports = app;
