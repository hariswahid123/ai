const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role, location, skills } = req.body;
    
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password, // Note: Not hashing password for this demo/MVP
      role: role || 'Both',
      location: location || '',
      skills: skills || []
    });

    await user.save();
    
    // Return user without password
    const userToReturn = { ...user._doc };
    delete userToReturn.password;
    
    res.status(201).json(userToReturn);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Return user without password
    const userToReturn = { ...user._doc };
    delete userToReturn.password;

    res.json(userToReturn);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all users (for demo Mentor Pool)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
