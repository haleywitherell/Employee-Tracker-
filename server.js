const mysql = require('mysql2');
const inquirer = require('inquirer');
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
            choices: ["View Departments", "View Roles", "View Employees", "Add Departemnt", "Add Role", "Add Empoyee", "Quit"], 
            name: "choice"
        }
    ]).then(({choice}) => {
        if(choice == "View Departments"){
            viewFunction("department")
            // add onto the if statement with othet tabels that I added above 
        } else if(choice == "View Roles") {
            viewFunction("roles")
        } else if(choice == "View Employees") {
            viewFunction("employee")
        }
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