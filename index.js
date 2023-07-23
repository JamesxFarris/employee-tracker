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

// Set values for inquirer prompts
const main = [
  { name: "View all departments", value: "departments" },
  { name: "View all roles", value: "roles" },
  { name: "View all employees", value: "employees" },
  { name: "Add a department", value: "addDepartment" },
  { name: "Add a role", value: "role" },
  { name: "Add an employee", value: "employee" },
  { name: "Update and employee role", value: "roleUpdate" },
  { name: "Exit", value: "exit" },
];

// Switch Case for main menu
function init() {
  inquirer.prompt(main).then((answer) => {
    switch (answer.main) {
      case "departments":
        viewDepartments();
        break;
      case "roles":
        viewRoles();
        break;
      case "employees":
        viewEmployees();
        break;
      case "addDepartment":
        addDepartment();
        break;
      case "role":
        addRole();
        break;
      case "employee":
        addEmployee();
        break;
      case "roleUpdate":
        updateRole();
        break;
      case "exit":
        db.end();
        break;
    }
  });
}

init();
