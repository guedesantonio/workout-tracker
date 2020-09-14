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

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then((workout) => {
            res.json(workout);
        })
        .catch((err) => {
            console.log(err);
        });
});


router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
            req.params.id,
            { $push: { exercises: req.body } },
            { new: true }
        )
        .then((workout) => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});




module.exports = router;