CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL
);

CREATE TABLE workers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id VARCHAR(50),
    name VARCHAR(100),
    department VARCHAR(100),
    phone VARCHAR(20)
);

CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id VARCHAR(50),
    date VARCHAR(20),
    status VARCHAR(20)
);

CREATE TABLE shifts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id VARCHAR(50),
    shift VARCHAR(50),
    date VARCHAR(20)
);