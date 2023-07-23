// Import Dependencies
import inquirer from "inquirer";
import mysql from "mysql2";
import consoleTable from "console.table";

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

// Function to view all departments
function viewDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    mainMenu();
  });
}
// Function to view all roles
function viewRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
    mainMenu();
  });
}
// Function to view all employees
function viewEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    mainMenu();
  });
}
// Function to add department

// Function to add a role
// Function to add an employee
// Function to update an employee's role

// Main menu function
function mainMenu() {
  inquirer
    //   Prompt user for action
    .prompt([
      {
        type: "list",
        name: "menuChoice",
        message: "Select an option:",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ])
    // Switch to call the function they chose
    .then((answers) => {
      switch (answers.menuChoice) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          // Call the function to view all employees
          break;
        case "Add a department":
          // Call the function to add a department
          break;
        case "Add a role":
          // Call the function to add a role
          break;
        case "Add an employee":
          // Call the function to add an employee
          break;
        case "Update an employee role":
          // Call the function to update an employee's role
          break;
        case "Exit":
          console.log("Have a great day!");
          process.exit(0);
        default:
          console.log("Invalid choice.");
          mainMenu();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Calls the main menu
mainMenu();
