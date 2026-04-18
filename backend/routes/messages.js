const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Send a message
router.post('/', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get messages for a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    // Get messages where user is sender or receiver
    const messages = await Message.find({
      $or: [{ sender: userId }, { receiver: userId }]
    }).populate('sender', 'name').populate('receiver', 'name').sort({ createdAt: -1 });
    
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
