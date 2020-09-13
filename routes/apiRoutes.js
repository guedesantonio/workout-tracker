const db = require("../models");
const router = express.Router();

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

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
//*/api/workouts/range

//* exercise/:?

//* exercise

//* stats

module.exports = router;