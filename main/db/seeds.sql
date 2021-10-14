INSERT INTO department (department_name)
VALUES ("Production"),
("IT"),
("Finance"),
("Sales"), 
("Marketing"),
("HR"), 
("R&D");

INSERT INTO role (title, salery, department_id)
VALUES ("CFO", 150000, 3),
("HR Rep", 50000, 6),
("Senior Communications Manager", 100000, 5),
("Sales Consultant", 75000, 4),
("Production Team Lead", 80000, 1);

INSERT INTO role employee (first_name, last_name, role_id, manager_id)
VALUES ("Maren", "Smith", 24, 21), 
("Matt", "Ramsey", 18, 4), 
("Kelsea", "Burk", 14, 10), 
("Mackenzie", "East", 20, 10),
("Mason", "Porter", 11, 2);