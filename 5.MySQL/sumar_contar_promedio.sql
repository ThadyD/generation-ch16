USE sakila;

SELECT * FROM payment;

-- SUM(), AVG(), COUNT()

SELECT customer_id, amount FROM payment;

-- COUNT () CUENTA LAS FILAS DE UNA TABLA
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country; -- asi podemos consultar de otras bases de datos

-- CANTIDAD DE RENTAS QUE TUVO EL TRABAJADOR 2
SELECT COUNT(*) FROM payment WHERE staff_id = 1;

-- cantidad de clientes distintos
SELECT COUNT(DISTINCT customer_id) FROM payment;

-- SUM()
SELECT SUM(amount) AS 'Total de rentas' FROM payment;

SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2;

-- cual cliente realizo más rentas
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) DESC;

SELECT * FROM payment ORDER BY staff_id;
-- group by 
SELECT * FROM payment GROUP BY staff_id ORDER BY COUNT(*) DESC;

-- ¿qué cliente gasto más?
SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id ORDER BY SUM(amount) DESC;
-- también podemos usar un alias para la misma expresión
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total DESC;

-- avg() regresa el promedio
SELECT AVG(amount) AS promedio FROM payment;
-- qué cliente gasto más
SELECT customer_id, AVG(amount) AS promediocliente FROM payment GROUP BY customer_id ORDER BY promediocliente DESC;