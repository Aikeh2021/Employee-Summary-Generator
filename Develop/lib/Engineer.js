// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee{
    constructor(name, id, email, gitHubUser) {
        super(name, id, email);
        this.gitHub = gitHubUser;
    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;