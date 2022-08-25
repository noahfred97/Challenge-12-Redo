// Dependencies
const inquirer = require("inquirer");
const util = require ("./databasefiles/util.js");
const queryUtil = require("./databasefiles/util.js");

initialize();

function initialize() {
    inquirer
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
}