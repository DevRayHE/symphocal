[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
# Project Title

## Symphocal

 --- 

## 📖Description

### A Full MERN Stack user management website build for an existing music school

### Langugaes used: 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)

 --- 

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

 --- 

## Features 
* Full Stack website with both front and back end implemented with MERN stack.
* User Input validation done during form input, before sending to the server side.
<br/>

 --- 

## Usage

### Here is a video to demonstrate 

![Usage sample video.](./src/assets/images/Demophoto.jpg)

 --- 

## Installation

[Link to this repo url](https://github.com/DevRayHE/symphocal)

[Deployed site on heroku](https://shrouded-woodland-70359.herokuapp.com/)

Follow the steps below to install: 

- On root folder - npm run install to install all development dependancies (Package.json setup to do this for both client and server side automatically)

- To start Server only - navigate to server folder and run npm run start. (Do not use node server.js - as there's a bug was resolved via installing esm npm package to run server via "node -r esm server.js")

- To start development mode locally - on root folder run "npm run develop", will start up server and front end locally on localhost:3000

- Challenges and lessons learnt on Deployment here:
1. Before deployment to Heroku, make sure delete the homepage attributes, such as "homepage": "https://myusername.github.io/my-app"
2. To seed data to deployed site on heroku, there's a few approach:
  2a - Step 1 [Try the tips from this link](https://stackoverflow.com/questions/32103222/how-to-seed-data-for-a-nodemongo-app-deployed-to-heroku)
  2b - If following the steps and got a host not found error, do the following:
    2b1: - on the terminal run Heroku Config, copy the generated string
    2b2: - Paste that string to /server/config/connection.js on line 3
    2b:3 - Replact the part: 'mongodb://localhost/symphocal' with the generated string

 --- 

## Contribute

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

 --- 

## Credits 
### Thank you for the great support from both Ben and Yun.

 --- 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
### MIT License

Copyright (c) [2022] [Ray He]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 --- 

## Questions

For any further questions or comments, feel free to contact me!

[Link to my github profile](https://github.com/devrayhe/)

[Drop me an email here](mailto:devrayhe@gmail.com)

 --- 

[Back to the top](#project-title)