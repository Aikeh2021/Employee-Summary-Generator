const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


let employees = [];

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
  if(answers.role === "Engineer"){
      inquirer.prompt([
          {
              type: "input",
              name: "github",
              message: "What is your GitHub username?"
          }
      ]).then((completeEmployee) => {
        let employee = new Engineer(answers.name, answers.id, answers.email, completeEmployee.github);
          employees.push(employee);
          console.log(employees);
          addMore();
      });
  }else if(answers.role === "Intern"){
      inquirer.prompt([
          {
              type: "input",
              name: "school",
              message: "What college or university do you attend?"
          }
      ]).then((completeEmployee) => {
        let employee = new Intern(answers.name, answers.id, answers.email, completeEmployee.school);
          employees.push(employee);
          console.log(employees);
          addMore();
      });
  } else if (answers.role === "Manager"){ 
    inquirer.prompt([
          {
              type: "input",
              name: "officeNumber",
              message: "What is your office number?"
          }
      ]).then((completeEmployee) => {
        let employee = new Manager(answers.name, answers.id, answers.email, completeEmployee.officeNumber);
        employees.push(employee);
        console.log(employees);
        addMore();
      });
  };

});
};



const addMore = () => {
    inquirer.prompt([
        {
            type: "confirm",
            name: "addingMore",
            message: "Do you want to add more employees?"
        }
    ]).then(({addingMore}) => {
        if(addingMore) {
            employeeQuestions();
        } else {
            console.log("Generating your custom employee webpage...");
              const renderingHTML = render(employees);
              fs.writeFile(outputPath, renderingHTML, "utf8", (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Your generated team file is ready for view!");
                };
            });
            };
        });
        
    };





employeeQuestions();


































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


