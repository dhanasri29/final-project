const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  type: String,
  content: [String]
});

const resumeSchema = new mongoose.Schema({
  userId: String,
  template: String,
  sections: [sectionSchema]
});

module.exports = mongoose.model('Resume', resumeSchema);
