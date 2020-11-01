//install inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
   return fs.writeFile(fileName, data, (err) => {
    if (err) throw err 

    console.log('your readme has been generated!')
   })

};

// function to initialize program
function init() {
//use inquirer to prompt questions for readme requirements ?????????
inquirer.prompt (questions).then((answers) => {
    console.log(answers.githubUsername)
    let readme = `My github username is ${answers.githubUsername}`;
    writeToFile('./README.md', generateMarkdown,  readme);

});
};

// function call to initialize program
init();

