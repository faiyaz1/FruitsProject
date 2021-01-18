const mongoose = require('mongoose');

//connect databse
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});


//fruit.save();

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const People = mongoose.model("People", peopleSchema);

const people = new People ({
    name: "Faiyaz",
    age: 25
});

//people.save();

const kiwi = new Fruit({
    name: "kiwi",
    rating: 10,
    review: "The best Fruit!"
});
const orange = new Fruit({
    name: "orange",
    rating: 6,
    review: "Good for health!"
});
const banana = new Fruit({
    name: "banana",
    rating: 8,
    review: "Good.."
});

Fruit.insertMany([kiwi, orange , banana], function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully saved all the fruits to fruitsDB");
    }
});

