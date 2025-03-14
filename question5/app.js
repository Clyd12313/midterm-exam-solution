// Import packages
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Express app
const app = express();
const port = 3000;

// Configure Sequelize with MySQL connection
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'root',
  dialect: 'mysql'
});

// Define the User model
const User = sequelize.define('User', {
  // Model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active'
  }
}, {
  // Model options
  tableName: 'users',
  timestamps: true
});

// Test database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    
    // Sync model with database (don't force in production)
    await sequelize.sync();
    console.log('Models synchronized with database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Call the test connection function
testConnection();

// Define route to get all users
app.get('/users', async (req, res) => {
  try {
    // Query all users using the Sequelize model
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});