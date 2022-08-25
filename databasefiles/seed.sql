-- Take from employee database
USE employees;

INSERT INTO title
    (title, department_ID, salary)
VALUES
    ("General Manager", 95000, 1),
    ("Pizza Shop", 25000, 2),
    ("Senior Pizza Shop", 32000, 3)
    ("Bakery", 30000, 4)
    ("Senior Bakery", 38000, 5)
    ("Bakery Manager", 50000, 6)
    ("Cashier", 25000, 7);
INSERT INTO department (name)
VALUES
    ("BakeShop"),
    ("PizzaShop"),
    ("FrontEnd"),
    ("Administration");
INSERT INTO employee (last_name, first_name, title_id, manager_id)
    VALUES
    ("Randall", "Evan",2,1),
    ("Jacobs", "Rachel",3,NULL),
    ("Goodman", "Daniel",2,1),
    ("Doughey", "Beth",6,NULL)
    ("Mcree", "Rodney",4,6);

