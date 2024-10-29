SELECT * FROM Customers WHERE CustomerName LIKE 'A%';

SELECT * FROM Customers ORDER BY PostalCode DESC;

SELECT * FROM Customers WHERE Country = 'Mexico' ORDER BY City, CustomerName;

SELECT * FROM Customers WHERE Country IN ('Germany', 'UK', 'France');

SELECT * FROM Products WHERE Unit LIKE '%bottle%';

SELECT * FROM Products WHERE Price BETWEEN 20 AND 30;

SELECT CategoryName, COUNT(*) AS ProductCount
FROM Categories 
INNER JOIN Products ON Categories.CategoryID = Products.CategoryID
GROUP BY CategoryName;

