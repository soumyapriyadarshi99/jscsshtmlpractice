const mongoose = require("mongoose");

//checking database connection
mongoose.connect("mongodb://localhost:27017/Edureka", (error) => {
  if (!error) {
    console.log("connected successfully");
  } else {
    console.log(error);
  }
});

const course = require("./course.model");
