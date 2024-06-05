import inquirer from "inquirer";
import chalk from "chalk";

//Define types:

interface Employee {
    Name : string;
    id : number;
    department : string;
    salary : number;
}

//variable initialisation:

let collectionOfEmployee:Employee [] =[]

async function  starEmployeeManagementSys(){

let selectOption = await inquirer.prompt([{
    type: 'list',
    name: 'option',
    message: 'Select an Option from List',
    choices: ['Add Employee', 'View Employees','Update Employee','Delete Employee', 'Exit']
}])
console.log(chalk.blue.bold("******* welcome To Employee Management System *******"));
console.log("\n");

    switch (selectOption.option ){
        case 'Add Employee':
            addEmployee();
            break;
            case 'View Employees':
                viewAllEmployee();
                break;
                case 'Delete Employee':
                    deleteEmployee();
                        break;
                        default:
                            process.exit
                            console.log(chalk.bold.bgCyan("Exiting the System"));
    }
}

async function addEmployee() {
    console.log("\n")
    console.log(chalk.bold.yellowBright("******* Add Employee *******"));
    let newEmployee = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message : 'Add Employee Name',
        },
        {
            type: 'number',
            name: 'employeeId',
            message : 'Add Employee ID',
            },
        {
            type: 'number',
            name: 'department',
            message : 'Add Employee Department',
        },
        {
            type: 'number',
            name: 'salary',
            message : 'Add Employee Salary',
        }
        
    ]);
    collectionOfEmployee.push({
        Name: newEmployee.name,
        id : newEmployee.employeeId,
        department : newEmployee.department,
        salary : newEmployee.salary,
    });
    console.log("\n");
    console.log(chalk.bold.greenBright("******* Employee Added Successfully! ******* "));
    console.log("\n");  
    console.log(collectionOfEmployee[collectionOfEmployee.length -1]);
    starEmployeeManagementSys();
}
function viewAllEmployee() {
    console.log(chalk.bold.bgMagentaBright("*********** View All Of Your Employees **********"));
    console.log("\n");
    for (let index = 0; index < collectionOfEmployee.length; index++) {
        console.log(collectionOfEmployee[index]);
        console.log("\n");
    }
    starEmployeeManagementSys();
}

async function deleteEmployee() {
    let employeeDetail = await inquirer.prompt([
        {
            message: "Please enter employee id : ",
            type: "number",
            name: "employeeId",
        },
    ]);

    collectionOfEmployee = collectionOfEmployee.filter(
        (x) => x.id != employeeDetail.employeeId
    );

    console.log(chalk.bold.bgRed("********** Employee Deleted Successfully ! **********"));
    console.log("\n")
    starEmployeeManagementSys();
}

starEmployeeManagementSys();
