INSERT INTO
    department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO
    role (title, salary, department_id)
VALUES
    ("Sales Lead", 100000, 1),
    ("Software Engineer", 250000, 2),
    ("Accountant", 85000, 3),
    ("Lawyer", 200000, 4);

INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Belon", "Tusk", 2, NULL),
    ("Boris", "Johnson", 4, 1),
    ("Donald", "Trump", 1, 1),
    ("Stacking", "Stanley", 3, 1);