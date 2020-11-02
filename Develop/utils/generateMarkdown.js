//create function for generating licenses
  //iterate through chosen license 

//create conditional if user wants to create credit section then generate area

const generateCredits = data => {
  if(!data.credits) {
    return ('');
  }

  return `
  ##CREDITS
  ${
    data.credits
  }
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

    //insert function for credits
      ${generateCredits(data.credits)}

    ## License
    ${data.license}

    ## Contributing
      ${data.contribute}
    ## Tests
      ${data.tests}

`;
}

module.exports = generateMarkdown;
