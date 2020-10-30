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


    ## Usage 


    ## Credits


    ## License


    ## Badges

    ## Features

    ## Contributing

    ## Tests

`;
}

module.exports = generateMarkdown;
