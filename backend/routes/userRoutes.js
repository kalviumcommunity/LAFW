// backend/routes/userRoutes.js

const express = require("express");
const bcrypt = require("bcryptjs"); // For hashing and comparing passwords
const jwt = require("jsonwebtoken"); // For generating login tokens
const { body, validationResult } = require("express-validator"); // For input validation
const User = require("../models/User"); // Your User model
const upload = require("../middleware/uploadMiddleware"); // Your multer middleware for file uploads
const { uploadToCloudinary, deleteFromCloudinary } = require('../utills/cloudinaryHelper');

const router = express.Router();





// --- END NEW PATCH ROUTE ---


// --- GET Routes (Keep as they were, added password exclusion) ---
// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude password
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: 'Server error while fetching users.' });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password'); // Exclude password
    if (!user) return res.status(404).json({ message: 'User not found.' });
    res.json(user);
  } catch (error) {
     console.error("Error fetching user by ID:", error.message);
     if (error.kind === 'ObjectId') {
        return res.status(400).json({ message: 'Invalid user ID format.' });
    }
    res.status(500).json({ error: 'Server error while fetching user.' });
  }
});


module.exports = router;