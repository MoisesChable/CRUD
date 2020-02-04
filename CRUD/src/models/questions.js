const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const QuestionSchema = new Schema ({
  question: String,
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  is: String,
  resp: String,
  ref: String
});

module.exports = mongoose.model('questions',QuestionSchema);
