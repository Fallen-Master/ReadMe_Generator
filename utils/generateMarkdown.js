
function renderLicenseBadge(license) {
     switch (license) {
          case "APACHE 2.0":
               return "![Static Badge](https://img.shields.io/badge/license-APACHE%202.0-blue)";
          case "BSD 3":
               return "![Static Badge](https://img.shields.io/badge/license-BSD%203-blue)";
          case "GPL 3.0":
               return "![Static Badge](https://img.shields.io/badge/license-GPL%203.0-blue)";
          case "MIT":
               return "![Static Badge](https://img.shields.io/badge/license-MIT-blue)";
          case "None":
               return "";
     }
}

function renderLicenseLink(license) {
     if (license === "None") {
          return "";
     } else {
          return "- [License](#license)"
     }
}

function renderLicenseSection(license) {
     if (license === "None") {
          return "";
     } else {
          return ` ## License
          This project is licensed inder the ${license}.`
     }
}

function generateMarkdown(username,
     email,
     projectName,
     description,
     license,
     commandRun,
     test,
     know,
     contribution) {
     return `# ${projectName}

${renderLicenseBadge(license)}
    
## Description
${description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(license)}
- [Contributing Guidelines](#contributing-guidelines)
- [Test](#test)
- [Questions](#questions)
  
## Installation
Run the following command to install dependencies:
\`\`\`
${commandRun}
\`\`\`
  
## Usage
${know}
  
${renderLicenseSection(license)}
  
## Contributing Guidelines
${contribution}

## Test 
To run tests, run the following command:
\`\`\`
${test}
\`\`\`
  
## Questions 
If you have any questions about the repo, open an issue or contact me directly at [${email}](mailto:${email}). 
You can find more of my work at [${username}](https://github.com/${username}))
`;
}

module.exports = generateMarkdown;
