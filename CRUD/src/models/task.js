const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const TaskSchema = new Schema ({
  tarea: String,
  fecha: String
});

module.exports = mongoose.model('tasks',TaskSchema);
