const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

// Create a new request
router.post('/', async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all requests (with optional filters)
router.get('/', async (req, res) => {
  try {
    const { category, urgency, status } = req.query;
    let query = {};
    if (category) query.category = category;
    if (urgency) query.urgency = urgency;
    if (status) query.status = status;

    const requests = await Request.find(query).populate('author', 'name email trustScore').sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single request
router.get('/:id', async (req, res) => {
  try {
    const request = await Request.findById(req.params.id).populate('author', 'name email trustScore').populate('helpers', 'name');
    if (!request) return res.status(404).json({ error: 'Request not found' });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update request (Mark as solved or add helper)
router.put('/:id', async (req, res) => {
  try {
    const updatedRequest = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRequest);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
