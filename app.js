const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser") 
const ejs = require("ejs");
const { log } = require("console");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", {useNewUrlParser: true});

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

//TODO

app.get("/articles", async function(req, res) {
    
    console.log("Loading articles...");

    await Article.find({}).then( article => {
            res.send(article);
    });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});