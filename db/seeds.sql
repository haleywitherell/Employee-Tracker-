USE employees

INSERT INTO department (department_name)
VALUES ("Production"),
("IT"),
("Finance"),
("Sales"), 
("Marketing"),
("HR"), 
("R&D");

INSERT INTO roles (title, salery, department_id)
VALUES ("CFO", 150000, 3),
("HR Rep", 50000, 6),
("Senior Communications Manager", 100000, 5),
("Sales Consultant", 75000, 4),
("Production Team Lead", 80000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maren", "Smith", 1, NULL), 
("Matt", "Ramsey", 4, 2),
("Kelsea", "Burk", 2, 1), 
("Mackenzie", "East", 3, NULL),
("Mason", "Porter", 5, 1);