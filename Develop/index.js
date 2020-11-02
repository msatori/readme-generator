//install inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        validate: userInput => {
            if (userInput) {
                return true
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a detailed description of your project. (Required)',
        validate: descInput => {
            if (descInput) {
                return true
            } else {
                console.log('Please enter a description for your project!');
                return false 
            }
        }
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
        message: 'Please list any contributers here',
        when: ({confirmCredits}) => confirmCredits
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to apply to your project?',
        choices: ['APACHE-2.0', 'MIT', 'BSD 2', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please detail future contributions that you would appreciate'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How would someone run tests on this app?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'
    }

];




// function to write README file
function writeToFile(data) {
    return fs.writeFile('README.md', data, err => {
        if (err) throw new err
    });
}


// function to initialize program
const init = () => {
    //use inquirer to prompt questions for readme requirements ?????????
    inquirer.prompt(questions).then((answers) => {
        console.log("Your README has been generated!");
        writeToFile(generateMarkdown({ ...answers }));
    })
};

// function call to initialize program
init();

