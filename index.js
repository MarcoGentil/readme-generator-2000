const inquirer = require('inquirer')
const fs = require("fs") 
const questions = []
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}
function generateLicenseBadge(data){
    if (data.License === "Apache") {
        return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    }
    if (data.License === "Boost") {
        return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
    }
    if (data.License === "BSD 3-Clause License") {
        return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
    }
    if (data.License === "BSD 2-Clause License") {
        return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
    }
    if (data.License === "Creative Commons") {
        return "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)"
    }
    if (data.License === "Eclipse Public License 1.0") {
        return "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)"
    }
    if (data.License === "GNU") {
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    }
    if (data.License === "Mozilla Public License 2.0") {
        return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
    }
    if (data.License === "The MIT License") {
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    }
    if (data.License === "The Unlicense") {
        return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)"
    }
}
function generateMarkdown(data){
   var badge = generateLicenseBadge(data)
    return `
${badge}
# ${data.Opening}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [License](#license)
- [Question](#question)
## Description
${data.Description}
## Installation
${data.Installation}
## Usage
${data.Usage}
## Contributing
${data.Contributing}
## Test
${data.Test}
## License
${data.License}
## Question
[Github Profile](https://github.com/${data.GitHub})

Email: ${data.Email}
`
}
function init() {}
init();
inquirer.prompt([{
    name: "Opening", 
    message: "Project name",
    type: "input",
}, {
    name: "TableOfContents", 
    message: "input into table of contents",
    type: "input",
}, {
    name: "Description", 
    message: "input into description section.",
    type: "input",
}, {
    name: "Installation", 
    message: "input into installation section.",
    type: "input",    
}, {
    name: "Usage", 
    message: "input into usage section.",
    type: "input", 
}, {
    name: "Contributing", 
    message: "input into contributing section.",
    type: "input",    
}, {
    name: "Test", 
    message: "input into test section.",
    type: "input",
}, {
    name: "License", 
    message: "Select a license.",
    type: "list",
    choices: ['BSD 3-Clause License', 'Apache', 'The Unlicense', 'none', 'BSD 2-Clause License', 'Creative Commons', 'Eclipse Public License 1.0', 'GNU', 'Mozilla Public License 2.0', 'The MIT License', 'Boost']
}, {
    name: "GitHub", 
    message: "input you git-hub porfile into the question section",
    type: "input",
}, {
    name: "Email", 
    message: "input yor e-mail into the question section.",
    type: "input",
}, {
    name: "Final", 
    message: "Now just press enter and see the magic.",
    type: "input",
}]).then(function(data){
    var markDown = generateMarkdown(data)
    writeToFile("INPUT.md", markDown);
})
