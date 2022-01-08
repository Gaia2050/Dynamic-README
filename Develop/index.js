// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//linking fs
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => { 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is your project title?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How will the user install your project?'
    },
    {
        type: 'input',
        name: 'utilization',
        message: 'How will you user use your project?'
    },
    {
        name: 'contributions',
        message: 'How will the user contribute to your project'
    },
    {
        name: 'test',
        message: 'What tests have you run on your project'
    },
    {
        name: 'questions',
        message: 'How will the user get in touch with you for asking any questions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you publishing this project under?',
        choices: ['apache', 'gnu', 'mit']
    }

]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    questions().then(handleResponse);
}


function handleResponse(response) {
    console.log(response);
    const markDown = generateMarkdown(response); 
    fs.writeFileSync('./dist/README.md',markDown )
}

// Function call to initialize app
init();


