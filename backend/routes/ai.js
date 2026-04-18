const express = require('express');
const router = express.Router();

// Simulated AI endpoint for categorizing and suggesting tags
router.post('/analyze-request', (req, res) => {
  const { title, description } = req.body;
  if (!title && !description) {
    return res.status(400).json({ error: 'Title or description required' });
  }

  const text = `${title} ${description}`.toLowerCase();

  // Keyword heuristic
  let category = 'Other';
  let urgency = 'Low';
  let tags = [];

  // Urgency detection
  if (text.includes('urgent') || text.includes('asap') || text.includes('deadline') || text.includes('tomorrow') || text.includes('emergency')) {
    urgency = 'High';
  } else if (text.includes('soon') || text.includes('need help') || text.includes('stuck')) {
    urgency = 'Medium';
  }

  // Category & Tag Detection
  if (text.includes('react') || text.includes('html') || text.includes('css') || text.includes('javascript') || text.includes('frontend')) {
    category = 'Web Development';
    if (text.includes('react')) tags.push('React');
    if (text.includes('css')) tags.push('CSS');
    if (text.includes('javascript')) tags.push('JavaScript');
  } else if (text.includes('figma') || text.includes('design') || text.includes('ui') || text.includes('ux') || text.includes('layout')) {
    category = 'Design';
    if (text.includes('figma')) tags.push('Figma');
    if (text.includes('ui')) tags.push('UI/UX');
  } else if (text.includes('interview') || text.includes('resume') || text.includes('career') || text.includes('portfolio')) {
    category = 'Career';
    if (text.includes('interview')) tags.push('Mock Interview');
    if (text.includes('resume')) tags.push('Resume Review');
  }

  // Deduplicate tags and ensure at least some fallback
  if (tags.length === 0) {
    tags.push('General Help');
  }
  tags = [...new Set(tags)];

  // Rewrite suggestion (mocking an LLM rewrite for clarity)
  let rewrittenTitle = title;
  if (title && title.length < 15) {
    rewrittenTitle = `Need help with: ${title}`;
  }

  res.json({
    suggestedCategory: category,
    suggestedUrgency: urgency,
    suggestedTags: tags,
    rewrittenTitle: rewrittenTitle
  });
});

module.exports = router;
