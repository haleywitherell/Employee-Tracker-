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
            message: "WHAT U WANT?",
            choices: ["View Departments"],
            // add other tables 
            name: "choice"
        }
    ]).then(({choice}) => {
        if(choice == "View Departments"){
            viewFunction("department")
            // add onto the if statement with othet tabels that I added above 
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