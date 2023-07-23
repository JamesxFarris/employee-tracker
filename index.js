// Import Dependencies
import inquirer from "inquirer";
import mysql from "mysql2";

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
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "departmentName",
        message: "What would you like to name the new department?",
      },
    ])
    .then((answers) => {
      const departmentName = answers.departmentName;
      db.query(
        "INSERT INTO department (name) VALUES (?)",
        [departmentName],
        function (err, results) {
          console.table(results);
          mainMenu();
        }
      );
    });
}
// Function to add a role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What would you like to name the new role?",
      },
      {
        type: "number",
        name: "salary",
        message: "What is the salary of the new role?",
      },
      {
        type: "number",
        name: "departmentId",
        message: "Enter the department ID for the new role:",
      },
    ])
    .then((answers) => {
      const { title, salary, departmentId } = answers;

      db.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [title, salary, departmentId],
        function (err, results) {
          if (err) {
            console.error("Error adding role:", err);
          } else {
            console.table(results);
          }
          mainMenu();
        }
      );
    });
}
// Function to add an employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
      {
        type: "number",
        name: "roleId",
        message: "Enter the role ID for the new employee:",
      },
      {
        type: "number",
        name: "managerId",
        message: "Enter the manager ID for the new employee:",
      },
    ])
    .then((answers) => {
      const { firstName, lastName, roleId, managerId } = answers;

      db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [firstName, lastName, roleId, managerId],
        function (err, results) {
          if (err) {
            console.error("Error adding employee:", err);
          } else {
            console.table(results);
          }
          mainMenu();
        }
      );
    });
}
// Function to update an employee's role
function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "employeeId",
        message: "Enter the ID of the employee you would like to update:",
      },
      {
        type: "number",
        name: "roleId",
        message: "Enter the ID of the new role for the employee:",
      },
    ])
    .then((answers) => {
      const { employeeId, roleId } = answers;

      db.query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
        [roleId, employeeId],
        function (err, results) {
          if (err) {
            console.error("Error updating employee:", err);
          } else {
            console.table(results);
          }
          mainMenu();
        }
      );
    });
}

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
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployeeRole();
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
