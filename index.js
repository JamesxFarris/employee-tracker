// Import Dependencies
import inquirer from "inquirer";
import { createConnection } from "mysql2";

// Connect to database
const db = createConnection(
  {
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employee_db",
  },
  console.log("Database connected.")
);

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
          // Call the function to view all departments
          break;
        case "View all roles":
          // Call the function to view all roles
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
