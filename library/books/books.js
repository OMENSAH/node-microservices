const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://admin:08swanzy@ds263791.mlab.com:63791/booksservice",
()=> {
    console.log("Database is connected");
})

const bodyParser = require("body-parser");
//making app to get json data by request.
app.use(bodyParser.json())

require("./Book");
const Book = mongoose.model("Book");
app.get("/", (req, res)=>{
    res.send("This is our main endpoint");
})

app.post("/book", (req, res)=>{
    let newBook = {
        title: req.body.title,
        author: req.body.author,
        numberPages:req.body.numberPages,
        publisher: req.body.publisher
    }
    let book  = new Book(newBook);
    book.save().then(() => {
        console.log("Book saved");
    }).catch((err) => {
        console.log(`${err}`); 
    })
    res.send("A new book created successfully");
});

app.get("/books", (req, res)=> {
    Book.find().then((books) => {
        //console.log(books);
        res.json(books);       
    }).catch((err)=> {
        if(err) throw err;
    })
});

app.get("/books/:id", (req, res)=> {
    Book.findById(req.params.id).then((book) => {
        //console.log(books);
        if(book){
            res.json(book);  
        }else{
            res.sendStatus(404)
        }     
    }).catch((err)=> {
        if(err) throw err;
    })
});

app.delete("/books/:id", (req, res) =>{
    Book.findOneAndRemove(req.params.id).then(()=>{
        res.send("Book deleted")
    }).catch(err =>{
        if(err) throw err;
    })
})
app.listen(3000, () => {
    console.log("Up and Running-- this is a book service");
})