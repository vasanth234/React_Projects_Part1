const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
   sender: {
      type: String,
      required: true
   },
   recipient: {
      type: String,
      required: true
   },
   subject: {
      type: String,
      required: true
   },
   body: {
      type: String,
      required: true
   },
   timestamp: {
      type: Date,
      default: Date.now
   }
});


const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
