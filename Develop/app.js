const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// const employees = [];


// const addMore = () => {
//     inquirer.prompt([
//         {
//             type: "confirm",
//             name: "addingMore",
//             message: "Do you want to add more employees?"
//         }
//     ]).then((response) => {
//         if(response.addingMore === true) {
//             employeeQuestions();
//         } else {
//             console.log("Generating your custom employee webpage...");
//             render(employees);
//         }
        
//     })
// };

// employee = new Employee();

// const employeeQuestions = () => {
//     inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "role",
//         message: "What is your classification at this company?",
//         choices: ["Engineer", "Intern", "Manager"],
//       },
//     ])
//     .then((answer) => {
//       if (answer.role === "Engineer") {
//         inquirer
//           .prompt([
//             {
//               type: "input",
//               name: "gitHub",
//               message: "What is your GitHub username?",
//             },
  
//             {
//               type: "string",
//               name: "name",
//               message: "What is your name (first and last)?",
//             },
  
//             {
//               type: "number",
//               name: "id",
//               message: "What is your employee ID number?",
//             },
  
//             {
//               type: "string",
//               name: "email",
//               message: "What is your preferred email address?",
//             },
//           ])
//           .then((partialEmployee) => {
//             let employee = {
//               ...answer,
//               ...partialEmployee,
//             };
//             console.log(employee);
//             employees.push(employee);
//             console.log(employees);
//             addMore();
//           });
//       } else if (answer.role === "Intern") {
//         inquirer
//           .prompt([
//             {
//               type: "input",
//               name: "school",
//               message: "What college or university do you attend?",
//             },
  
//             {
//               type: "string",
//               name: "name",
//               message: "What is your name (first and last)?",
//             },
  
//             {
//               type: "number",
//               name: "id",
//               message: "What is your employee ID number?",
//             },
  
//             {
//               type: "string",
//               name: "email",
//               message: "What is your preferred email address?",
//             },
//           ])
//           .then((partialEmployee) => {
//             let employee = {
//               ...answer,
//               ...partialEmployee,
//             };
//             console.log(employee);
//             employees.push(employee);
//             addMore();
//           });
//       } else if (answer.role === "Manager") {
//         inquirer
//           .prompt([
//             {
//               type: "input",
//               name: "officeNumber",
//               message: "What is your office number?",
//             },
  
//             {
//               type: "string",
//               name: "name",
//               message: "What is your name (first and last)?",
//             },
  
//             {
//               type: "number",
//               name: "id",
//               message: "What is your employee ID number?",
//             },
  
//             {
//               type: "string",
//               name: "email",
//               message: "What is your preferred email address?",
//             },
//           ])
//           .then((partialEmployee) => {
//             let employee = {
//               ...answer,
//               ...partialEmployee,
//             };
//             console.log(employee);
//             employees.push(employee);
//             addMore();
//           });
//       }
//     });

// }

// const addMore = () => {
//   inquirer.prompt([
//       {
//           type: "confirm",
//           name: "addingMore",
//           message: "Do you want to add more employees?"
//       }
//   ]).then((response) => {
//       if(response.addingMore === true) {
//           employeeQuestions();
//       } else {
//           console.log("Generating your custom employee webpage...");
//           render(employees);
//       }
      
//   })
// };



// employeeQuestions();






































// inquirer.prompt([
//         {
//             type: "confirm",
//             name: "addMore",
//             message: "Do you need to add more employees?",
//             default: ["Yes", "No"]
//         }
//         ]).then(response =>{
//             if(response.addMore === "Yes"){
//                 employeeQuestions;
//             }
//         });

// inquirer.prompt([
//     {
//         type: "string",
//         name: "name",
//         message: "What is your name (first and last)?"
//     },

//     {
//         type: "number",
//         name: "id",
//         message: "What is your employee ID number?"
//     },

//     {
//         type: "string",
//         name: "email",
//         message: "What is your preferred email address?"
//     },

//     {
//         type: "list",
//         name: "role",
//         message: "What is your classification at this company?",
//         choices: ["Engineer", "Intern", "Manager"]
//     }
// ])
// .then(answers => {
//     if(answers.role === 'Engineer'){
//         inquirer.prompt([
//             {
//                 type: "input",
//                 name: "gitHub",
//                 message: "What is your GitHub username?"
//             }
//         ])
//         // .then(employee => {
//         //     console.log(employee);
//         //     console.log(error);
//         // })
//     }else if(answers.role === 'Intern'){
//         inquirer.prompt([
//             {
//                 type: "input",
//                 name: "school",
//                 message: "What college or university do you attend?"
//             }
//         ])
//         // .then(employee => {
//         //     console.log(employee);
//         //     console.log(error);
//         // })
//     } else if (answers.role === 'Manager'){
//         inquirer.prompt([
//             {
//                 type: "input",
//                 name: "officeNumber",
//                 message: "What is your office number?"
//             }
//         ])
//         // .then(employee =>{
//         //     console.log(employee);
//         //     console.log(error);
//         // })
//     }

// })

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

employee = new Employee();
const employees = [];

const employeeQuestions = () => {
inquirer.prompt([
  {
      type: "string",
      name: "name",
      message: "What is your name (first and last)?"
  },

  {
      type: "number",
      name: "id",
      message: "What is your employee ID number?"
  },

  {
      type: "string",
      name: "email",
      message: "What is your preferred email address?"
  },

  {
      type: "list",
      name: "role",
      message: "What is your classification at this company?",
      choices: ["Engineer", "Intern", "Manager"]
  }
])
.then((answers) => {
  if(answers.role === 'Engineer'){
      inquirer.prompt([
          {
              type: "input",
              name: "gitHub",
              message: "What is your GitHub username?"
          }
      ]).then((completeEmployee) => {
        let employee = {
          ...answers,
          ...completeEmployee,
          };
          employees.push(employee);
          console.log(employees);
          addMore();
      });
  }else if(answers.role === 'Intern'){
      inquirer.prompt([
          {
              type: "input",
              name: "school",
              message: "What college or university do you attend?"
          }
      ]).then((completeEmployee) => {
        let employee = {
          ...answers,
          ...completeEmployee,
          };
          employees.push(employee);
          console.log(employees);
          addMore();
      });
  } else if (answers.role === 'Manager'){
      inquirer.prompt([
          {
              type: "input",
              name: "officeNumber",
              message: "What is your office number?"
          }
      ]).then((completeEmployee) => {
        let employee = {
          ...answers,
          ...completeEmployee,
          };
        employees.push(employee);
        console.log(employees);
        addMore();
      });
  };

});
};

// const addMore = async () => {
//     inquirer.prompt([
//         {
//             type: "confirm",
//             name: "addingMore",
//             message: "Do you want to add more employees?"
//         }
//     ]).then((response) => {
//         if(response.addingMore === true) {
//             employeeQuestions();
//         } else {
//             console.log("Generating your custom employee webpage...");
//             async () => { 
//               const response = await response.addingMore(false);
//               render();
//             };
//         };
        
//     });

// };

const addMore = () => {
    inquirer.prompt([
        {
            type: "confirm",
            name: "addingMore",
            message: "Do you want to add more employees?"
        }
    ]).then((response) => {
        if(response.addingMore === true) {
            employeeQuestions();
        } else {
            console.log("Generating your custom employee webpage...");
              render();
            };
        });
        
    };



employeeQuestions();
