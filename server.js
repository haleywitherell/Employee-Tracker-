const mysql = require('mysql2');
const inquirer = require('inquirer');
const { allowedNodeEnvironmentFlags } = require('process');
const Connection = require('mysql2/typings/mysql/lib/Connection');
// const Connection = require('mysql2/typings/mysql/lib/Connection');

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
        } else {
            connection.end()
        }; 
            
        
        // add onto the if statement with othet tabels that I added above 
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


// create functions for query 21 and 22
function addDepartment(table){

}