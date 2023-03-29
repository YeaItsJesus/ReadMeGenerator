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
    name: "Description",
    message: "Project Description?",
  },
  {
    type: "input",
    name: "Installation",
    message: "Installation?",
  },

  {
    type: "input",
    name: "Contribution",
    message: "Contribution Info?",
  },
  {
    type: "input",
    name: "Email",
    message: "For questions(Email)?",
  },
  {
    type: "input",
    name: "GitHub",
    message: "For questions(GitHub)?",
  },
  {
    type: "list",
    name: "License",
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
      return writeToFile("READMEEXAMPLE.md",markdownGenerator({...answers}));
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
