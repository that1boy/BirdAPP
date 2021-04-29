const express = require("express");
const router = express.Router();
const Species = require("../models/birdSpecies");

router.get("/", async (req, res) => {
  Species.find({}, async (error, docs) => {
    if (error) {
      res.send(error);
    } else {
      res.send(docs);
    }
  });
});

router.post("/modify", async (req, res) => {
  if (req.body.name) {
    Species.findOne(
      { name: req.body.name.toLowerCase() },
      async (error, docs) => {
        if (error) {
          res.send(error);
        } else {
          if (docs !== null) {
            Species.findOneAndUpdate(
              { name: req.body.name.toLowerCase() },
              {
                size: req.body.size,
                colour: req.body.colour,
                weight: req.body.weight,
              },
              { new: true },
              async (err, doc) => {
                if (err) {
                  res.send(err);
                } else {
                  res.send(doc);
                }
              }
            );
          } else {
            res.send("species not found!");
          }
        }
      }
    );
  } else {
    res.send("specify name of species!");
  }
});

router.post("/add", async (req, res) => {
  if (req.body.name) {
    Species.findOne(
      { name: req.body.name.toLowerCase() },
      async (error, doc) => {
        if (error) {
          res.send(error);
        } else {
          if (doc !== null) {
            res.send("species already present!");
          } else {
            const detail = new Species({
              name: req.body.name.toLowerCase(),
              size: req.body.size,
              colour: req.body.colour,
              weight: req.body.weight,
            });
            try {
              detail.save().then(() => {
                res.send("species added success");
              });
            } catch (error) {
              res.send(error);
            }
          }
        }
      }
    );
  } else {
    res.send("specify name of species!");
  }
});

router.post("/delete", async (req, res) => {
  if (req.body.name) {
    Species.findOne(
      { name: req.body.name.toLowerCase() },
      async (error, docs) => {
        if (error) {
          res.send(error);
        } else {
          if (docs !== null) {
            Species.deleteOne(
              { name: req.body.name.toLowerCase() },
              async (error, doc) => {
                if (error) {
                  res.send(error);
                } else {
                  res.send("delete success!");
                }
              }
            );
          } else {
            res.send("species not found!");
          }
        }
      }
    );
  } else {
    res.send("specify name of species!");
  }
});

module.exports = router;
