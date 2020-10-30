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
        name: 'projectName',
        message: 'What is the name of your project?'
    },


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
    writeToFile('./README.md', readme);

});
};

// function call to initialize program
init();

