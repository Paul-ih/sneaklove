const express = require("express");
const router = express.Router();

const SneakerModel = require("./../models/Sneaker");

// WHY IS SNEAKERMODEL GREEN? I HAVEN'T SEEN THIS COLOR BEFORE.

// ARE THERE OTHER CONST MODELS THAT WE NEED TO ADD HERE? 

// GET - all sneakers

// There was originally  "protectRoute" in this function, 
// but I left it out because I didn't think we needed it

// THIS STILL NEEDS TO BE UPDATED
router.get("/", protectRoute, async (req, res, next) => {
    try {
      res.render("dashboard/albums", { albums: await AlbumModel.find().populate("artist label") });
    } catch (err) {
      next(err);
    }
  });
