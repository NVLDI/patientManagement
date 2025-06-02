# This is the code for our patient management system. 

Required - Powershell or terminal or command prompt, visual studio code (VS Code) - IDE

Follow these instructions to run the project

Step 1: Download and install Node.js from https://nodejs.org/en - click next to all default options

Step 2: Restart the system - Recommended (or restart all the open terminals)

Step 3: Check the node or npm version in terminal with command `node -v` to check node version and verify if the installation was successful or `npm -v` to check the node package manager version and verify if the installation was successful

Step 4: Open the folder in which the project needs to be cloned, right click select open in terminal

Step 5: in the terminal use this command to clone the GitHub repo `git clone https://github.com/sumannodepro/patientManagement.git`

Step 6: use this command to navigate to the actual project `cd patientManagement`

Step 7: type `code .` and press enter key to open VS Code in the project

Step 8: Open terminal in VS Code and run the command `npm install expo`

Step 9: Check if expo is installed correctly by running the command `npm list expo`

Step 10: Start the web app by running the command `npx expo start` then press `w` for web from the options, the browser will open with the web app

Note: To recieve the latest updates in the code run the command `git pull` in the terminal to update the code base, execute `npm install` to update the packages and run `npx expo start` then refresh the page for latest update.

- This repository is with Continuous Integraton and Continuous Deployment which is set up with AWS. When a commit message is tagged with [deploy] it will build and deploy the app automatically in AWS. Example usage `git commit -m "Fixed workflow [deploy]`
