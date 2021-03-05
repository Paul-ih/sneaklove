require("dotenv").config();
require("./../../config/mongo"); 
const SneakerModel = require("./../../models/Tag");

const tag = [
    {
        label: "best seller",
    },
    {
        label: "new spring collection",
    },
];