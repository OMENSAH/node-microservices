const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://admin:08swanzy@ds263791.mlab.com:63791/customerservice",
()=> {
    console.log("Database is connected");
})

const bodyParser = require("body-parser");
//making app to get json data by request.
app.use(bodyParser.json())

require("./Customer");
const Customer = mongoose.model("Customer");
app.get("/", (req, res)=>{
    res.send("This is our main endpoint");
})

app.post("/customer", (req, res)=>{
    let newCustomer = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }
    let customer = new Customer(newCustomer);
    customer.save().then(() =>{
        res.send("Customer Created")
    }).catch(err=>{
        if(err) throw err;
    })
});

app.get("/customers", (req, res)=> {
    Customer.find().then(books=> {
        res.json(books);
    }).catch(err =>{
        if(err) throw err;
    })
})

app.get("/customer/:id", (req, res)=> {
    Customer.findById(req.params.id).then((customer) => {
        //console.log(books);
        if(customer){
            res.json(customer);  
        }else{
            res.sendStatus(404)
        }     
    }).catch((err)=> {
        if(err) throw err;
    })
});

app.delete("/customer/:id", (req, res) =>{
    Customer.findOneAndRemove(req.params.id).then(()=>{
        res.send("Customer deleted")
    }).catch(err =>{
        if(err) throw err;
    })
})

app.listen(3001, () => {
    console.log("Up and Running-- this is a customer service");
})