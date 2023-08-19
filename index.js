// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
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




// TODO: Create a function to write README file
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
    // let badge = ""
    // switch (license){
    //     case "APACHE 2.0":
    //         badge ="![Static Badge](https://img.shields.io/badge/license-APACHE%202.0-blue)";
    //         break;
    //     case "BSD 3":
    //         badge ="![Static Badge](https://img.shields.io/badge/license-BSD%203-blue)";
    //         break;
    //     case "GPL 3.0":
    //         badge ="![Static Badge](https://img.shields.io/badge/license-GPL%203.0-blue)";
    //         break;
    //     case "MIT":
    //         badge ="![Static Badge](https://img.shields.io/badge/license-MIT-blue)";
    //         break;
    //      case "None":
    //         badge ="";
    //         break;
    // }


    // const readMe = `
    // # ${projectName}

    // ${badge}


    // ## Description
    // ${description}

    // ## Table of Contents
    // - [Installation](#installation)
    // - [Usage](#usage)
    // - [License](#license)
    // - [Contributing Guidelines](#contributing-guidelines)
    // - [Test](#test)
    // - [Questions](#questions)

    // ## Installation
    // Run the following command to install dependencies:
    // \`\`\`
    // ${commandRun}
    // \`\`\`

    // ## Usage
    // ${know}

    // ## License
    // This project is licensed inder the ${license}.

    // ## Contributing Guidelines
    //  ${contribution}
    // ## Test 
    // To run tests, run the following command:
    // \`\`\`
    // ${test}
    // \`\`\`

    // ## Questions 
    // If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${username}
    // `
    fs.writeFileSync(fileName, template)
    console.log('README file has been generated')
}

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers)
    })
}
// // Function call to initialize app
init();
