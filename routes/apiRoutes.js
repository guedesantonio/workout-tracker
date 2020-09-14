const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  //*"/api/workouts"

router.put("/api/workouts/:id", (req, res) => {
db.Workout.find({})
    .then((workouts) => {
    res.json(workouts);
    })
    .catch((err) => {
    console.log(err);
    });
});
  
//*/api/workouts/range

//* exercise/:?

//* exercise

//* stats

module.exports = router;