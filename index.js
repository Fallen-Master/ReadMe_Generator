
const inquirer = require('inquirer')

const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        name: 'username',
        type: 'input',
        message: 'What is your Github username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
    },
    {
        name: 'projectName',
        type: 'input',
        message: 'What is your projects name?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please write a short description of your project.'
    },
    {
        name: 'license',
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        name: 'commandRun',
        type: 'input',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        name: 'test',
        type: 'input',
        message: 'What command should be run to run test?',
        default: 'npm test'
    },
    {
        name: 'know',
        type: 'input',
        message: 'What does the user need to know about using the repo?'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?'
    }
];

function writeToFile(fileName, answers) {
    const {
        username,
        email,
        projectName,
        description,
        license,
        commandRun,
        test,
        know,
        contribution
    } = answers

    let template = generateMarkdown(
        username,
        email,
        projectName,
        description,
        license,
        commandRun,
        test,
        know,
        contribution
    )

    fs.writeFileSync(fileName, template)
    console.log('README file has been generated')
}
//test

function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers)
    })
}

init();
