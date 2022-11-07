CREATE DATABASE IF NOT EXISTS `TESTDB`;
USE `TESTDB`;

CREATE TABLE `users` (
  `firstname` VARCHAR(50) NOT NULL,
  `lastname`  VARCHAR(50) NOT NULL,
  `address` VARCHAR(50) NOT NULL,
  `postcode`  VARCHAR(50) NOT NULL,
  `contactnumber` VARCHAR(50) NOT NULL,
  `email`  VARCHAR(50) NOT NULL,
  `username` VARCHAR(50) NOT NULL ,
  `password` VARCHAR(0) NOT NULL,
  PRIMARY KEY (`username`)
);

INSERT INTO`users`(`firstname`,`lastname`,`address`,`postcode`,`contactnumber`,`email`,`username`,`password`) 
VALUES
('cheska','princena','dasma','1234','123456789','email@gmail.com','user123','pass123'),
('cheska1','princena1','dasma1','1234','1234567891','1email@gmail.com','1user123','1pass123');