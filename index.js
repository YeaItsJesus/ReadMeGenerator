// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const markdownGenerator = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project Title?",
  },
  {
    type: "input",
    name: "description",
    message: "Project Description?",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation?",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage?",
  },

  {
    type: "input",
    name: "contribution",
    message: "Contribution Info?",
  },
  {
    type: "input",
    name: "email",
    message: "For questions(Email)?",
  },
  {
    type: "input",
    name: "github",
    message: "For questions(GitHub)?",
  },
  {
    type: "list",
    name: "license",
    message: "License?",
    choices: ["MIT", "ISC", "GNUPLv3"],
    filter(val) {
      return val.toLowerCase();
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      return writeToFile("GENERATEDREADME.md",markdownGenerator({...answers}));
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
