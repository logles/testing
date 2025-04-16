# Tech Quiz Test Suite

## Table of Contents

- [Description](#description)
- [Credits](#credits)
- [License](#license)
- [Badge](#badge)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Description

In today's dynamic development environment, testing is not just an afterthought but a critical part of the development process. The **Tech Quiz Test Suite** project builds upon a fully functioning Tech Quiz application—developed using the MERN stack (MongoDB, Express.js, React, and Node.js)—by integrating Cypress for comprehensive testing. This project adds both component and end-to-end tests to ensure the application performs reliably under various conditions. Users can take a tech quiz featuring ten random questions and view their final score, allowing aspiring developers to test their knowledge and improve their skills.

Link to Video: https://app.screencastify.com/v3/watch/Ot9lebkPZUkcrKHJiwot

## Usage

- Run "start:dev": "concurrently \"npm run server:dev\" \"wait-on tcp:3001 && npm run client:dev\"",
- "test": "cypress run --component",
- "test-gui": "npx cypress open --detached"

## Credits

- FSF-PT-Class code
- Xpert Learning Assistant
- Bootcamp TAs

## License

This project is licensed under the **MIT License**.

[License Link](https://opensource.org/licenses/MIT)

## Badge

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Features

- **Comprehensive Testing:**  
  Integrates Cypress for thorough component and end-to-end tests.
- **Dynamic Tech Quiz:**  
  Users can take a quiz with ten random technical questions, view their final score, and restart the quiz.
- **Robust Test Coverage:**  
  Ensures that both individual components and full user interactions are reliably tested.
- **MERN Stack Architecture:**  
  Leverages MongoDB, Express.js, React, and Node.js for a full-stack application.
- **Streamlined Development:**  
  Enhances reliability and performance, ensuring the application meets modern web standards.

## How to Contribute

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Added new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## Tests

Test through cypress e2e and component

## Questions

For any questions, feel free to reach out:

- GitHub: https://github.com/logles
