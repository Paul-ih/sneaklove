require("dotenv").config();
require("./../../config/mongo"); 
const SneakerModel = require("./../../models/Sneaker");

const sneaker = [
    {
    name: "Adidas",
    ref: "String",
    size: "40",
    description: "black and white",
    price: 60,
    category: ["men", "women"],
    id_tags: [ObjectId]

// CATEGORY AND OBJECT ID -- are these formatted correctly?
},
{
    name: "Nike",
    ref: "String",
    size: "36",
    description: "pink and white",
    price: 70,
    category: ["kids", "women"],
    id_tags: [ObjectId]

// CATEGORY AND OBJECT ID -- are these formatted correctly?
},
{
    name: "Basics",
    ref: "String",
    size: "36",
    description: "90's kids",
    price: 40,
    category: ["kids"],
    id_tags: [ObjectId]

// CATEGORY AND OBJECT ID -- are these formatted correctly?
},
{
    name: "New Balance",
    ref: "String",
    size: "43",
    description: "all black",
    price: 80,
    category: ["men"],
    id_tags: [ObjectId]

// CATEGORY AND OBJECT ID -- are these formatted correctly?
},
{
    name: "New Balance",
    ref: "String",
    size: "39",
    description: "all white",
    price: 65,
    category: ["women"],
    id_tags: [ObjectId]

// CATEGORY AND OBJECT ID -- are these formatted correctly?
}
],



// COPIED -- still need to update
    (async function insertSneaker() {
        try {
          await SneakerModel.deleteMany(); // empty the styles db collection -- I DON'T THINK WE NEED THIS LINE
          const inserted = await SneakerModel.insertMany(sneaker); // insert docs in db
          console.log(`seed artists done : ${inserted.length} documents inserted !`);
        } catch (err) {
          console.error(err);
        }
      })();