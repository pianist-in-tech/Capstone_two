const express = require("express");
const db = require("../db"); // Connect to the PostgreSQL database
const userInfoRouter = express.Router(); // Create a new Express router

// Define the POST endpoint to store user information
userInfoRouter.post("/api/user-info", async (req, res) => {
  try {
    const { name, email, instrument, proficiency } = req.body; // Extract user information from the request body
    
    // Insert user information into the database
    const result = await db.query(
      "INSERT INTO users (name, email, instrument, proficiency) VALUES ($1, $2, $3, $4) RETURNING id",
      [name, email, instrument, proficiency] // Parameterized query to avoid SQL injection
    );
    
    res.status(201).json({ message: "User info stored successfully", userId: result.rows[0].id });
  } catch (error) {
    console.error("Error inserting user info:", error);
    res.status(500).json({ error: "An error occurred while storing user information" });
  }
});

module.exports = userInfoRouter; // Export the router module
