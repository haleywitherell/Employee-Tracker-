const mysql = require('mysql2');
const inquirer = require('inquirer');
// const cTable = require('console.table')
// require('dotenv').config()

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    port: 3306,
    password: "Bossbaby6!",
    database: "employees"
})

db.connect((err) => {
    if(err) throw err;
    askQuestions()
})

function askQuestions(){
    console.log("inquirer")
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["View Departments", "View Roles", "View Employees", "Add Departemnt", "Add Role", "Add Employee", "Quit"], 
            name: "choice"
        }
    ]).then(({choice}) => {
        if(choice == "View Departments"){
            viewFunction("department")
        } else if(choice == "View Roles") {
            viewFunction("roles")
        } else if(choice == "View Employees") {
            viewFunction("employee")
        } else if(choice == "Add Departemnt") {
            addDepartment()
        } else if(choice == "Add Role") {
            addRole()
        } else if(choice == "Add Employee") {
            addEmployee()
        } else if(choice == "Quit") {
            connection.end()
        }; 
       
    })
}

function viewFunction(table){
    const sqlString = `
    SELECT *
    FROM ${table}`

    db.query(sqlString, (err, data) => {
        if(err) throw err;
        console.log('\n')
        console.table(data)
        console.log('\n')

        askQuestions()
    })
}


// add deptartment function
function addDepartment(){

    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'Please insert the name of the department',
            
        },
    ]) .then((data) => {
        db.query(`INSERT INTO department(name) VALUES( ? )`, data.department)

        askQuestions();
    })
}

// add role function
function addRole(){

    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the role?',
            
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this role?',
            
        },
        {
            type: 'input',
            name: 'department_id ',
            message: 'What department is the role in?',
            
        },
    ]) .then((data) => {
        db.query(`INSERT INTO roles VALUES ?`, data.roles)

        askQuestions();
    })
}

// add employee function
function addEmployee(){

    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the employees first name?',
            
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the employees last name?',
            
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'List the employees role',
            
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'List the employees manager',
            
        },
    ]) .then((data) => {
        db.query(`INSERT INTO roles VALUES ?`, data.roles)

        askQuestions();
    })
}