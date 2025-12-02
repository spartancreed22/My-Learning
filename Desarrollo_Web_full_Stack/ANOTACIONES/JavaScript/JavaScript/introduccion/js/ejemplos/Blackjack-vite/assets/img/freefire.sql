-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-10-2023 a las 16:33:37
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `freefire`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `arma`
--

CREATE TABLE `arma` (
  `id_weapon` int(3) NOT NULL,
  `arma` varchar(32) NOT NULL,
  `descripcion` varchar(30) NOT NULL,
  `Danio_cabeza` int(3) NOT NULL,
  `Danio_pecho` int(2) NOT NULL,
  `danio_extremed` int(2) NOT NULL,
  `id_tip_wea` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avatar`
--

CREATE TABLE `avatar` (
  `id_avatar` int(2) NOT NULL,
  `avatar` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `avatar`
--

INSERT INTO `avatar` (`id_avatar`, `avatar`) VALUES
(1, 'prueba'),
(2, 'confirm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_partida`
--

CREATE TABLE `detalle_partida` (
  `id_deta_part` int(11) NOT NULL,
  `id_partida` int(11) NOT NULL,
  `Documento` int(11) NOT NULL,
  `document` int(11) DEFAULT NULL,
  `id_weapon` int(3) NOT NULL,
  `impacto_cabeza` int(3) NOT NULL,
  `impacto_pecho` int(3) NOT NULL,
  `impacto_exremed` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadisticas`
--

CREATE TABLE `estadisticas` (
  `id_stadistics` int(11) NOT NULL,
  `KD` char(32) DEFAULT NULL,
  `Muertes` char(30) DEFAULT NULL,
  `Bajas` int(6) DEFAULT NULL,
  `Tiros_cabeza` int(11) DEFAULT NULL,
  `id_rango` int(11) NOT NULL,
  `id_nivel` int(11) NOT NULL,
  `Documento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `Id_estado` int(2) NOT NULL,
  `Estado` varchar(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`Id_estado`, `Estado`) VALUES
(1, 'Activo'),
(2, 'Innactivo'),
(3, 'Online'),
(4, 'Offline');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fecha`
--

CREATE TABLE `fecha` (
  `id_fecha` int(3) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `Documento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `fecha`
--

INSERT INTO `fecha` (`id_fecha`, `fecha`, `hora`, `Documento`) VALUES
(53, '2023-10-01', '18:53:10', 1110451633),
(54, '2023-10-01', '18:53:30', 1110451633),
(55, '2023-10-03', '06:28:42', 1110451633);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `id_genero` int(2) NOT NULL,
  `Genero` varchar(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`id_genero`, `Genero`) VALUES
(1, 'Masculino'),
(2, 'Femenino'),
(3, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mapa`
--

CREATE TABLE `mapa` (
  `Id_mapa` int(2) NOT NULL,
  `Mapa` varchar(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel`
--

CREATE TABLE `nivel` (
  `id_nivel` int(11) NOT NULL,
  `nivel` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida`
--

CREATE TABLE `partida` (
  `id_partida` int(11) NOT NULL,
  `Numero de partida` varchar(32) NOT NULL,
  `Tiempo` varchar(32) NOT NULL,
  `Zona` varchar(20) NOT NULL,
  `jugadores` int(3) NOT NULL,
  `Id_mapa` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida_fin`
--

CREATE TABLE `partida_fin` (
  `id_fin` int(11) NOT NULL,
  `fecha_final` datetime NOT NULL,
  `fecha_inicial` datetime NOT NULL,
  `Documento` int(11) NOT NULL,
  `id_rango` int(11) NOT NULL,
  `id_nivel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rango`
--

CREATE TABLE `rango` (
  `id_rango` int(11) NOT NULL,
  `rango` varchar(30) NOT NULL,
  `exp` int(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `Id_rol` int(2) NOT NULL,
  `rol` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`Id_rol`, `rol`) VALUES
(1, 'Admin'),
(2, 'Usuario'),
(3, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo de arma`
--

CREATE TABLE `tipo de arma` (
  `Id_tip_wea` int(2) NOT NULL,
  `Tip_wea` varchar(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo de documento`
--

CREATE TABLE `tipo de documento` (
  `Id_tip_doc` int(2) NOT NULL,
  `tip_doc` varchar(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo de documento`
--

INSERT INTO `tipo de documento` (`Id_tip_doc`, `tip_doc`) VALUES
(1, 'Tarjeta de identidad'),
(2, 'Cedula'),
(3, 'Cedula de extranjeria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Documento` int(11) NOT NULL,
  `Nombres` varchar(32) DEFAULT NULL,
  `Apellidos` varchar(32) DEFAULT NULL,
  `NombreUsuario` varchar(20) DEFAULT NULL,
  `Correo` varchar(30) DEFAULT NULL,
  `contraseña` varchar(100) DEFAULT NULL,
  `id_avatar` int(2) NOT NULL,
  `id_genero` int(2) NOT NULL,
  `Id_tip_doc` int(2) NOT NULL,
  `id_estado` int(2) NOT NULL,
  `id_rol` int(2) NOT NULL,
  `telefono` int(11) DEFAULT NULL,
  `nacimiento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Documento`, `Nombres`, `Apellidos`, `NombreUsuario`, `Correo`, `contraseña`, `id_avatar`, `id_genero`, `Id_tip_doc`, `id_estado`, `id_rol`, `telefono`, `nacimiento`) VALUES
(124124, 'qewrwqe q', 'werwe', 'werwe', 'wefw@sdgs', '$2y$15$Akp2rBDOSzC5h', 1, 1, 1, 1, 1, 0, '2009-12-11'),
(235235, 'wefewwerw', '3532', 'Prueba', 'wefw@sdg.qeq', '$2y$15$K1gERuqDaYaAP', 1, 1, 1, 1, 1, 0, '2009-12-01'),
(2562362, 'prueba03', 'pruebasfasfa', 'Prueba03', 'atfadfsa@segfef', '$2y$15$9DN0pNPqHXQ5v', 1, 1, 1, 1, 1, 0, '2009-12-03'),
(1110451633, 'Joshua', 'Ortiz gaitan', 'Josh', 'jortiz336@misena.edu.co', '$2y$15$umnXHo4jGoxm6YRtdVPQoe9E/VfnaZrBKEFndGbsqnmaambafOcSq', 1, 1, 1, 1, 1, 0, '2004-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zona`
--

CREATE TABLE `zona` (
  `id_zona` int(11) NOT NULL,
  `zona` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `arma`
--
ALTER TABLE `arma`
  ADD PRIMARY KEY (`id_weapon`),
  ADD KEY `id_tip_wea` (`id_tip_wea`);

--
-- Indices de la tabla `avatar`
--
ALTER TABLE `avatar`
  ADD PRIMARY KEY (`id_avatar`);

--
-- Indices de la tabla `detalle_partida`
--
ALTER TABLE `detalle_partida`
  ADD PRIMARY KEY (`id_deta_part`),
  ADD KEY `Documento` (`Documento`),
  ADD KEY `document` (`document`),
  ADD KEY `id_partida` (`id_partida`),
  ADD KEY `id_weapon` (`id_weapon`);

--
-- Indices de la tabla `estadisticas`
--
ALTER TABLE `estadisticas`
  ADD PRIMARY KEY (`id_stadistics`),
  ADD KEY `Documento` (`Documento`),
  ADD KEY `id_rango` (`id_rango`),
  ADD KEY `id_nivel` (`id_nivel`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`Id_estado`);

--
-- Indices de la tabla `fecha`
--
ALTER TABLE `fecha`
  ADD PRIMARY KEY (`id_fecha`),
  ADD KEY `Documento` (`Documento`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`id_genero`);

--
-- Indices de la tabla `mapa`
--
ALTER TABLE `mapa`
  ADD PRIMARY KEY (`Id_mapa`);

--
-- Indices de la tabla `nivel`
--
ALTER TABLE `nivel`
  ADD PRIMARY KEY (`id_nivel`);

--
-- Indices de la tabla `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`id_partida`),
  ADD KEY `Id_mapa` (`Id_mapa`);

--
-- Indices de la tabla `partida_fin`
--
ALTER TABLE `partida_fin`
  ADD PRIMARY KEY (`id_fin`),
  ADD KEY `partida_fin_ibfk_1` (`Documento`),
  ADD KEY `id_nivel` (`id_nivel`),
  ADD KEY `id_rango` (`id_rango`);

--
-- Indices de la tabla `rango`
--
ALTER TABLE `rango`
  ADD PRIMARY KEY (`id_rango`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`Id_rol`);

--
-- Indices de la tabla `tipo de arma`
--
ALTER TABLE `tipo de arma`
  ADD PRIMARY KEY (`Id_tip_wea`);

--
-- Indices de la tabla `tipo de documento`
--
ALTER TABLE `tipo de documento`
  ADD PRIMARY KEY (`Id_tip_doc`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Documento`),
  ADD KEY `Id_genero` (`id_genero`),
  ADD KEY `id_estado` (`id_estado`),
  ADD KEY `id_rol` (`id_rol`),
  ADD KEY `id_avatar` (`id_avatar`),
  ADD KEY `Id_tip_doc` (`Id_tip_doc`);

--
-- Indices de la tabla `zona`
--
ALTER TABLE `zona`
  ADD PRIMARY KEY (`id_zona`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `arma`
--
ALTER TABLE `arma`
  MODIFY `id_weapon` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `avatar`
--
ALTER TABLE `avatar`
  MODIFY `id_avatar` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `detalle_partida`
--
ALTER TABLE `detalle_partida`
  MODIFY `id_deta_part` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estadisticas`
--
ALTER TABLE `estadisticas`
  MODIFY `id_stadistics` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `Id_estado` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `fecha`
--
ALTER TABLE `fecha`
  MODIFY `id_fecha` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de la tabla `genero`
--
ALTER TABLE `genero`
  MODIFY `id_genero` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `nivel`
--
ALTER TABLE `nivel`
  MODIFY `id_nivel` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `partida_fin`
--
ALTER TABLE `partida_fin`
  MODIFY `id_fin` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rango`
--
ALTER TABLE `rango`
  MODIFY `id_rango` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `Id_rol` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipo de arma`
--
ALTER TABLE `tipo de arma`
  MODIFY `Id_tip_wea` int(2) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo de documento`
--
ALTER TABLE `tipo de documento`
  MODIFY `Id_tip_doc` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `zona`
--
ALTER TABLE `zona`
  MODIFY `id_zona` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `arma`
--
ALTER TABLE `arma`
  ADD CONSTRAINT `arma_ibfk_1` FOREIGN KEY (`id_tip_wea`) REFERENCES `tipo de arma` (`Id_tip_wea`);

--
-- Filtros para la tabla `detalle_partida`
--
ALTER TABLE `detalle_partida`
  ADD CONSTRAINT `detalle_partida_ibfk_1` FOREIGN KEY (`Documento`) REFERENCES `usuario` (`Documento`),
  ADD CONSTRAINT `detalle_partida_ibfk_2` FOREIGN KEY (`document`) REFERENCES `usuario` (`Documento`),
  ADD CONSTRAINT `detalle_partida_ibfk_3` FOREIGN KEY (`id_partida`) REFERENCES `partida` (`id_partida`),
  ADD CONSTRAINT `detalle_partida_ibfk_4` FOREIGN KEY (`id_weapon`) REFERENCES `arma` (`id_weapon`);

--
-- Filtros para la tabla `estadisticas`
--
ALTER TABLE `estadisticas`
  ADD CONSTRAINT `estadisticas_ibfk_1` FOREIGN KEY (`Documento`) REFERENCES `usuario` (`Documento`) ON DELETE CASCADE,
  ADD CONSTRAINT `estadisticas_ibfk_2` FOREIGN KEY (`id_rango`) REFERENCES `rango` (`id_rango`),
  ADD CONSTRAINT `estadisticas_ibfk_3` FOREIGN KEY (`id_nivel`) REFERENCES `nivel` (`id_nivel`) ON DELETE CASCADE;

--
-- Filtros para la tabla `fecha`
--
ALTER TABLE `fecha`
  ADD CONSTRAINT `fecha_ibfk_1` FOREIGN KEY (`Documento`) REFERENCES `usuario` (`Documento`) ON DELETE CASCADE;

--
-- Filtros para la tabla `partida`
--
ALTER TABLE `partida`
  ADD CONSTRAINT `partida_ibfk_1` FOREIGN KEY (`Id_mapa`) REFERENCES `mapa` (`Id_mapa`);

--
-- Filtros para la tabla `partida_fin`
--
ALTER TABLE `partida_fin`
  ADD CONSTRAINT `partida_fin_ibfk_1` FOREIGN KEY (`Documento`) REFERENCES `usuario` (`Documento`) ON DELETE CASCADE,
  ADD CONSTRAINT `partida_fin_ibfk_2` FOREIGN KEY (`id_nivel`) REFERENCES `nivel` (`id_nivel`),
  ADD CONSTRAINT `partida_fin_ibfk_3` FOREIGN KEY (`id_rango`) REFERENCES `rango` (`id_rango`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`id_genero`) REFERENCES `genero` (`id_genero`),
  ADD CONSTRAINT `usuario_ibfk_3` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`Id_estado`),
  ADD CONSTRAINT `usuario_ibfk_4` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`Id_rol`),
  ADD CONSTRAINT `usuario_ibfk_5` FOREIGN KEY (`id_avatar`) REFERENCES `avatar` (`id_avatar`),
  ADD CONSTRAINT `usuario_ibfk_6` FOREIGN KEY (`Id_tip_doc`) REFERENCES `tipo de documento` (`Id_tip_doc`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
