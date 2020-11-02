

//create conditional if user wants to create credit section then generate area

const generateCredits = creditData => {
  if(!creditData) {
    return ('');
  }

  return `
  ##CREDITS
  ${creditData.credits}
  `
};

// function to generate markdown for README
const generateMarkdown = data => {
  return `
    # ${data.title}

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


      ${generateCredits()}

    ## License
    ${data.license}

    ## Contributing
      ${data.contribute}
    ## Tests
      ${data.tests}

`;
}

module.exports = generateMarkdown;
