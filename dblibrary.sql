-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2021 a las 03:21:31
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dblibrary`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `booklisttable`
--

CREATE TABLE `booklisttable` (
  `book_Id` int(255) NOT NULL,
  `book_name` varchar(50) NOT NULL,
  `book_subjet` varchar(50) NOT NULL,
  `book_author` varchar(50) NOT NULL,
  `book_editorial` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `booklisttable`
--

INSERT INTO `booklisttable` (`book_Id`, `book_name`, `book_subjet`, `book_author`, `book_editorial`) VALUES
(1, 'Quijote de la Mancha', 'Literatura Universal', 'Miguel de Cervantes', 'Santillana'),
(2, 'Cien Años de Soledad', 'Literatura Colombiana', 'Gabriel Garcia Marquez', 'Planeta'),
(4, 'Sidartha', 'Literatura Universal', 'Herman Hesse', 'Planeta'),
(5, 'El Túnel', 'Literatura Latinoamericana', 'Ernesto Sabato', 'Planeta'),
(6, 'La Ciudad y los Perros', 'Literatura Latinoamericana', 'Mario Vargas LLosa', 'Planeta'),
(7, 'La Divina Comedia', 'Literatura Universal', 'Dante', 'Planeta'),
(8, 'La Rebelion de las Ratas', 'Literatura Colombiana', 'Fernando Soto Aparicio', 'Oveja Negra'),
(10, 'El Arte de la Guerra', 'Literatura Universal', 'Sun Tzu', 'Oveja Negra'),
(11, 'Platero y Yo', 'Literatura Latinoamericana', 'Juan Ramón Jimenez', 'Oveja Negra');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `booklisttable`
--
ALTER TABLE `booklisttable`
  ADD PRIMARY KEY (`book_Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `booklisttable`
--
ALTER TABLE `booklisttable`
  MODIFY `book_Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
