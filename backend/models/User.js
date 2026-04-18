const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Not hashed for simplicity in demo
  role: { 
    type: String, 
    enum: ['Need Help', 'Can Help', 'Both'], 
    default: 'Both' 
  },
  location: { type: String, default: '' },
  skills: [{ type: String }],
  trustScore: { type: Number, default: 100 },
  badges: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
