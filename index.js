// Import Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employee_db",
  },
  console.log("Database connected.")
);
