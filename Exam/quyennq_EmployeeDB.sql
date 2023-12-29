-- nguyen van quyen
--1 and 2. Create the EmployeeDB database and constrains
CREATE DATABASE EmployeeDB;
GO

-- Use the EmployeeDB database
USE EmployeeDB;
GO

-- Create the Department table
CREATE TABLE Department (
    Departid INT PRIMARY KEY,
    DepartName VARCHAR(50) NOT NULL,
    Description VARCHAR(100) NOT NULL
);
GO

-- Create the Employee table
CREATE TABLE Employee (
    EmpCode CHAR(6) PRIMARY KEY,
    FirstName VARCHAR(30) NOT NULL,
    LastName VARCHAR(30) NOT NULL,
    Birthday SMALLDATETIME NOT NULL,
    Gender BIT DEFAULT 1,
    Address VARCHAR(100),
    DepartiD INT FOREIGN KEY REFERENCES Department(Departid),
    Salary MONEY
);
GO


--3. Insert into Department table
INSERT INTO Department (Departid, DepartName, Description)
VALUES
    (1, 'HR', 'Human Resources Department'),
    (2, 'IT', 'Information Technology Department'),
    (3, 'Finance', 'Finance Department');
GO
-- Insert into Employee table
INSERT INTO Employee (EmpCode, FirstName, LastName, Birthday, Gender, Address, DepartiD, Salary)
VALUES
    ('E001', 'Nguyen', 'Van', '1990-01-15', 1, '123 ha noi', 1, 50000),
    ('E002', 'Le', 'quyen', '1985-08-22', 0, '456 quang ninh', 2, 60000),
    ('E003', 'linh', 'huong', '1992-04-05', 1, '789 hcm', 3, 55000);
GO


--4. Update the Salary in Employee table
UPDATE Employee
SET Salary = Salary * 1.10;
GO

--5. Add constraint to ensure Salary is always greater than 0
ALTER TABLE Employee
ADD CONSTRAINT CK_Salary_GreaterThanZero CHECK (Salary > 0);
