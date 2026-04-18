const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }, // e.g., Web Development, Design, Career
  urgency: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  tags: [{ type: String }],
  status: { type: String, enum: ['Open', 'Solved'], default: 'Open' },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  helpers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);
