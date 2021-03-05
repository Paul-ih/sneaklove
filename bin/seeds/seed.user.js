require("dotenv").config();
require("../../config/mongo"); 
const SneakerModel = require("../../models/User");

const user = [
    {
        name: "Mackenzie",
        lastname: "M",
        email: "mackenzie@ironhack.edu",
        password: "Secure123"
      },
      {
        name: "Paul",
        lastname: "P",
        email: "paul@ironhack.edu",
        password: "MyPass123"
      },
    {
        name: "First",
        lastname: "Customer",
        email: "firstcust@gmail.com",
        password: "SuperSecure*1"
      },


]