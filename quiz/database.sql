CREATE DATABASE IF NOT EXISTS quiz_db;
USE quiz_db;

CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    option_a VARCHAR(255) NOT NULL,
    option_b VARCHAR(255) NOT NULL,
    option_c VARCHAR(255) NOT NULL,
    option_d VARCHAR(255) NOT NULL,
    correct_answer CHAR(1) NOT NULL
);

INSERT INTO questions (question, option_a, option_b, option_c, option_d, correct_answer) VALUES
('What does HTML stand for?', 'Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Language', 'Home Tool Markup Language', 'A'),
('Which language is used for styling web pages?', 'HTML', 'CSS', 'JavaScript', 'PHP', 'B'),
('What does PHP stand for?', 'Personal Home Page', 'PHP Hypertext Preprocessor', 'Private Home Page', 'Both A and B', 'D'),
('Which SQL statement is used to extract data?', 'GET', 'SELECT', 'EXTRACT', 'PULL', 'B'),
('What is the default port for MySQL?', '3306', '8080', '80', '443', 'A');
