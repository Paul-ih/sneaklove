const express = require("express");
const router = express.Router();

const SneakerModel = require("./../models/Sneaker");

// ARE THERE OTHER CONST MODELS THAT WE NEED TO ADD HERE? 

// GET - all sneakers

// There was originally  "protectRoute" in this function, 
// but I left it out because
router.get("/", protectRoute, async (req, res, next) => {
    try {
      res.render("dashboard/albums", { albums: await AlbumModel.find().populate("artist label") });
    } catch (err) {
      next(err);
    }
  });
