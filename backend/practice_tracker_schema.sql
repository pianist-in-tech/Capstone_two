-- schema.sql

-- Drop existing table if needed (be careful with this in production)
DROP TABLE IF EXISTS users;

-- Create the users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY, -- Auto-incrementing primary key
  name VARCHAR(50) NOT NULL, -- User's name, cannot be null
  email VARCHAR(100) UNIQUE NOT NULL, -- User's email, unique constraint
  instrument VARCHAR(50), -- Optional field for the instrument
  proficiency VARCHAR(50) CHECK (proficiency IN ('beginner', 'advanced beginner', 'advanced', 'professional')), -- Enforce specific values
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Automatically set to current timestamp
);

-- Create indexes (optional)
CREATE INDEX ON users (email); -- Index on the email field
