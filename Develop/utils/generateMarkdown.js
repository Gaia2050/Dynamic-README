// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'apache') return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  if (license === 'gnu') return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  if (license === 'mit') return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (license === 'apache') return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  // if(license === 'gnu') return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  // if(license === 'mit') return '[![License: MIT](https://img.shields.  io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  if (license === 'mit') {
    return '[mit](https://opensource.org/licenses/MIT)'
  }
if (license === 'apache') {
  return '[apache](https://www.apache.org/licenses/LICENSE-2.0)'
}

if (license === 'gnu') {
  return '[gnu](https://www.gnu.org/licenses/gpl-3.0.en.html)'
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if ( license.length > 0 ) {
//     return true;
//   } else {
//     return '';
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## table of contents 
  * [description](#description)
  * [installation](#installation)
  * [utilization](#utilization)
  * [contributions](#contributions)
  * [test](#test)
  * [questions](#questions)
  * [license](#license)

  ## description
  ${data.description}

  ## installation
  ${data.install}

  ## utilization 
  ${data.utilization}

  ## contributions 
  ${data.contributions}

  ## test
  ${data.test}

  ## questions
  ${data.questions}

  ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
