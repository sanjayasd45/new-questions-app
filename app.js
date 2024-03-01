const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const engine = require("ejs-mate");
const methodOverride = require("method-override")
require("dotenv").config();
const password = encodeURIComponent(process.env.PASSWORD);
const port = encodeURIComponent(process.env.PORT);
const app = express();

const answerRouter = require("./routes/answer.route.js");
const questionRouter = require("./routes/question.route.js")    

const session = require("express-session");

mongoose.connect(`mongodb+srv://sanjayasd45:${password}@datacluster.lgoji1f.mongodb.net/new-pro-questions?retryWrites=true&w=majority`)
    .then(
        app.listen(port, () => {
            console.log("connected to DB, sever running at port : ",port);
        })
    )
    .catch((e) => {
        console.log("connection error - ", e);
    });

// basic middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,  "/views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("ejs", engine);
app.use(methodOverride("_method"))

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: Date.now() + 7 * 24*60*60*1000,
      maxAge: 7 * 24*60*60*1000,
      httpOnly:true, //security purpose to save from cross scripting attacks
    },
};

app.use(session(sessionOptions))

app.use((req, res, next) => {
    res.locals.currUser = req.user
    next()
})

app.use("/answer", answerRouter)
app.use("/question", questionRouter)


app.get("/",(req,res) => {
    res.send("Hi I am root");   
});

app.all("*", (req, res) => { 
    res.send('page not found')
})



