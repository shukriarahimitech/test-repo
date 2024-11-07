CREATE TABLE IF NOT EXISTS universities (
    id SERIAL PRIMARY KEY,
    studentname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL, 
    age int

)

SELECT *FROM universities