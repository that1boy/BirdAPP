const express = require("express");
const router = express.Router();
const Sight = require("../models/birdSighting");

router.get("/", async (req, res) => {
    Sight.find({}, async (error, docs) => {
        if (error) {
          res.send(error);
        } else {
          res.send(docs);
        }
      });
});

router.post("/modify", async (req, res) => {
    if (req.body.specie) {
        Sight.findOne(
          { specie: req.body.specie.toLowerCase() },
          async (error, docs) => {
            if (error) {
              res.send(error);
            } else {
              if (docs !== null) {
                Sight.findOneAndUpdate(
                  { specie: req.body.specie.toLowerCase() },
                  {
                    type: req.body.type,
                    location: req.body.location,
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
                res.send("sight not found!");
              }
            }
          }
        );
      } else {
        res.send("specify name of species!");
      }
});

router.post("/add", async (req, res) => {
    const detail= new Sight({
        specie: req.body.specie,
        createdAt: req.body.dateTime,
        location: req.body.location
    });
    try {
        detail.save().then(()=>{
            res.send("sight added success");
        })
    } catch (error) {
        res.send(error);
    }
});

router.post("/delete", async (req, res) => {
    if (req.body.name) {
        Sight.findOne(
          { specie: req.body.specie.toLowerCase(),location:req.body.location.toLowerCase() },
          async (error, docs) => {
            if (error) {
              res.send(error);
            } else {
              if (docs !== null) {
                Sight.deleteOne(
                  { specie: req.body.specie.toLowerCase(),location:req.body.location.toLowerCase() },
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
