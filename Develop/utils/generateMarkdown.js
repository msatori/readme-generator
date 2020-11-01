//create function for generating licenses
  //iterate through chosen license 

//create conditional if user wants to create credit section then generate area

const generateCredits = creditData => {
  if(!creditData) {
    return (''),
  }

  return `
  ##CREDITS
  ${
    questions.creditsS
  }
  `
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ## Description 

    ${data.description}


    ## Table of Contents (Optional)

      * [Installation](#installation)
      * [Usage](#usage)
      * [Credits](#credits)
      * [License](#license)


    ## Installation
      ${questions.installation}

    ## Usage 
      ${questions.usage}



    ## License


    ## Badges

    ## Features

    ## Contributing

    ## Tests

`;
}

module.exports = generateMarkdown;
