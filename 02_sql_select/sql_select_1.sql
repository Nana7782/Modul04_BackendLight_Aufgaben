SELECT * FROM Customers;

SELECT CustomerName, City, Country FROM Customers;

SELECT * FROM Customers WHERE Country='Germany';

SELECT * FROM Customers WHERE City = 'London' AND Country = 'UK';

SELECT * FROM Customers ORDER BY CustomerName ASC;

SELECT * FROM Customers LIMIT 5;

SELECT COUNT(*) FROM Customers;