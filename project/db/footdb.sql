-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 11 déc. 2020 à 11:51
-- Version du serveur :  5.7.31
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `footdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL,
  `title` mediumtext CHARACTER SET utf8mb4 NOT NULL,
  `images` blob,
  `description` longtext CHARACTER SET utf8mb4,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `title`, `images`, `description`) VALUES
(1, 'nico', NULL, 'wsh bien ou quoi t\'habite dans le coin'),
(2, 'CO-LEADER AVEC LE SC BASTIA DEPUIS LA SEMAINE DERNIÈRE', NULL, 'csdsdcfd '),
(3, 'LE RED STAR DEUXIÈME DU CLASSEMENT ', NULL, 'bien'),
(4, 'MATCH MAITRISÉ DE BOUT EN BOUT,LE RED STAR S’IMPOSE À CHOLET 2-0', NULL, 'U20 '),
(5, 'Le nouveau maillot du Red Star', NULL, 'U18'),
(6, 'Le Red Star, douze visages, une histoire', NULL, 'cd'),
(7, 'Red Star, un club mythique ', NULL, 'U17'),
(8, 'Histoire de l\'étoile rouge du Red Star', NULL, 'vds '),
(9, 'Christian Caminiti nouveau coach du Red Star', NULL, 'vds'),
(10, 'MATCH MAITRISÉ DE BOUT EN BOUT,LE RED STAR S’IMPOSE À CHOLET 2-0', NULL, 'U20 ');

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL,
  `nomproduit` mediumtext CHARACTER SET utf8mb4 NOT NULL,
  `prix` double NOT NULL,
  `image` varchar(300) COLLATE utf8mb4_bin DEFAULT NULL,
  `descriptions` longtext CHARACTER SET utf8mb4,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `nomproduit`, `prix`, `image`, `descriptions`) VALUES
(0, 'Chaussure', 80, 'https://api.alanakra.fr/foot/chaussures.jpg', 'Les chaussures officielles de l\'équipe'),
(1, 'Survet', 15, 'https://api.alanakra.fr/foot/survet.jpg', 'Un survet bien chaud pour les saisons froides'),
(2, 'Maillot', 30, 'https://api.alanakra.fr/foot/maillot.jpg', 'Le maillot domicile porté par les joueurs sur le terrain.');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` binary(160) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `registered` datetime DEFAULT NULL,
  `article_id` binary(160) NOT NULL,
  `product_id` binary(160) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_article_idx` (`article_id`),
  KEY `fk_users_product1_idx` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `registered`, `article_id`, `product_id`) VALUES
(0x01000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 'alan', '$2a$10$yBLvUiwGc.3ENjJGMBjUc.XVhhou3gYvDsaQzqdiQ8w/64zn/JNN2', '2020-11-29 18:37:25', 0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
