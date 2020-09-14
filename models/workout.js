const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
},
exercises: [{
  type: {
      type: String,
      trim: true,
      required: "Enter an exercise type"
  },
  name: {
      type: String,
      trim: true,
      required: "Enter exercise"
  },
  duration: {
      type: Number,
      required: "Enter exercise time in minutes"
  },
  weight: {
      type: Number
  },
  reps: {
      type: Number
  },
  sets: {
      type: Number
  },
  distance: {
      type: Number
  }
}],
 toJSON: {
  // include any virtual properties when data is requested
  virtuals: true
}
}
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
}, 0);
 })

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
