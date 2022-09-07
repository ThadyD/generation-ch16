CREATE DATABASE generation;
USE generation;

CREATE TABLE cohorte_16(
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companieros INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL
);

SELECT * FROM cohorte_16;
INSERT INTO cohorte_16 (nombre, apellido, companieros, direccion, proyecto)
VALUES ('Fabiola', 'Gomez', 7, 'CDMX sur', 'DinoDevs'),
('Aline', 'Hernandez', 7, 'CDMX', 'TecnoGurus'),
('Hector', 'Gonzalez', 7, 'CDMX', 'Shades'),
('Rosalba', 'Serrano', 7, 'CDMX', 'Backgrounders'),
('Jonathan', 'Ramirez', 7, 'CDMX', 'VaquitasGalacticas');



SELECT * FROM cohorte_16;

DELETE FROM cohorte_16
WHERE alumno_id = 3;

SELECT * FROM cohorte_16;

UPDATE cohorte_16
SET nombre = 'Zul',
apellido = 'García'
WHERE alumno_id = 5;

SELECT * FROM cohorte_16;

SELECT nombre, apellido FROM cohorte_16; /*se usa el where si queremos ser más especifico WHERE nombre = 'Aline'*/

SELECT * FROM cohorte_16;

SELECT nombre, apellido FROM cohorte_16 ORDER BY apellido DESC;
/*ORDER BY puede acompañarse de ASC (Ascendente) - DESC (descendente), aunque order by solo acomoda de forma ascendente*/

SELECT * FROM cohorte_16;
