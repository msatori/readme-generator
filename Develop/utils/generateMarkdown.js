

//create conditional if user wants to create credit section then generate area
const generateCredits = creditData => {
  if(!creditData) {
    return '';
  }

  return `
  ${creditData.credits}
  `
};

// function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title} [![License](https://img.shields.io.badge/license-${data.license}-blue.svg)]

  ## Description 

  ${data.description}


  ## Table of Contents (Optional)

    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)


  ## Installation
    ${data.installation}

  ## Usage 
    ${data.usage}

  ## CREDITS
    ${generateCredits()}

  ## License
  ${data.license} [![License](https://img.shields.io.badge/license-${data.license}-blue.svg)]

  ## Contributing
    ${data.contribute}
  ## Tests
    ${data.tests}

  # Contact Me
    Feel free to contact me if you have any questions about this project. I can be reached by email at ${data.email}

`;
}

module.exports = generateMarkdown;
