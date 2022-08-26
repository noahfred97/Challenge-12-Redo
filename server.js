// Dependencies
const inquirer = require("inquirer");
const { exit } = require("process");
const util = require ("./databasefiles/util.js");
const queryUtil = require("./databasefiles/util.js");

initialize();

function initialize() {
   //Start inquirer prompts.

    inquirer
    // Creates Menu Options
    .createPromptModule({
        type: "list",
        choices: [
            "New Department",
           
            "New Employee",
           
            "New Title",
           
            "Display Departments",
           
            "Display Employees",
           
            "Display Title",
           
            "Update Employee Title",
           
            "Delete Title",
           
            "Delete Employee",
           
            "Delete Department",
           
            "Exit",

        ],
        message: "How can I help you today?",
        name: "choice",
    })
    
    .then((answer) => {
        
        switch (answer.option) {
            case "New Employee":
                return newEmployee();
            case "New Title":
                return newTitle();
            case "New Department":
                return newDepartment();
            case "Display Employees":
                return displayEmployees();
            case "Display Departments":
                return displayDepartment();
            case "Display Titles"():
                return displayTitle();
            case "deleteEmployee":
                return deleteEmplotee();
            case "Delete Title":
                return deleteTitle();
            case "Delete Department":
                return deleteDepartment();
            case "Exit":
                return exit();


        }
    }
        )
}