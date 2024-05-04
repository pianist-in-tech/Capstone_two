-- Clear existing data (if needed)
DELETE FROM users;

-- Insert initial users
INSERT INTO users (name, email, instrument, proficiency)
VALUES
    ('name', 'testUser'),
    ('email', 'test@gmail.com'),
    ('Guitar', 'beginner'),
    ('Piano', 'advanced'),
    ('Violin', 'professional');
