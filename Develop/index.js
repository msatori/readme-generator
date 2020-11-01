//install inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('/utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a detailed description of your project. (Required)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How should I intall dependancies?'
    },
    {
        type: "input",
        name: 'usage',
        message: 'Give a brief description on the intended usage for this project'
    },
    {
        type: "confirm",
        name: 'confirmCredits',
        message: 'Would you like to add a section to credit and contributers?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any contributers here'
    }

];




// function to write README file
function writeToFile(fileName, data) {
   return fs.writeFile(path.join(process.cwd(), fileName), data) 
}
// function to initialize program
function init() {
//use inquirer to prompt questions for readme requirements ?????????
inquirer.prompt (questions).then((answers) => {
    console.log("Your README has been generated!");
    writeToFile('./README.md', generateMarkdown({...answers}));

})
}

// function call to initialize program
init();

