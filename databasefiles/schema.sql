-- refreshes database by dropping old one if exist and creates new database.
DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department
(

id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
name VARCHAR (30) UNIQUE NOT NULL
);

CREATE TABLE title
(
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
title VARCHAR (30) NOT NULL ,
salary DECIMAL NOT NULL ,
department_id INT USNIGNED NOT NULL,
);