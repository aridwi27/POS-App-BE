-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2021 at 12:56 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restorant`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_category` int(10) NOT NULL,
  `name_category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id_category`, `name_category`) VALUES
(1, 'drink'),
(2, 'food'),
(9, 'junkfood');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `invoice` varchar(30) NOT NULL,
  `cashier` varchar(50) NOT NULL,
  `orders` varchar(255) NOT NULL,
  `quantity` int(10) NOT NULL,
  `amount` int(20) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `invoice`, `cashier`, `orders`, `quantity`, `amount`, `date`) VALUES
(79, '0012', 'maimunah', '26', 2, 69000, '2021-01-24 00:00:00'),
(80, '0012', 'maimunah', '26', 2, 69000, '2021-01-24 00:00:00'),
(81, '0012', 'maimunah', '26', 2, 69000, '2021-01-24 00:00:00'),
(82, '0012', 'maimunah', '26', 2, 69000, '2021-01-24 00:00:00'),
(83, '0012', 'maimunah', '26', 2, 69000, '2021-01-24 00:00:00'),
(84, '0012', 'maimunah', '26', 2, 69000, '2021-01-24 00:00:00'),
(85, '0012', 'maimunah', '26', 2, 69000, '2021-01-24 00:00:00'),
(86, '0012', 'maimunah', '28', 1, 20000, '2021-01-24 00:00:00'),
(105, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(106, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(107, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(125, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(127, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(128, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(129, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(130, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(131, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(132, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(133, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(134, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(135, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(136, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(137, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(138, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(139, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(140, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(141, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(142, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(143, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(144, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(145, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(146, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(147, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(148, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(149, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(150, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(151, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(152, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(153, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(154, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(155, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(156, '13', 'jk', '28', 3, 100000, '2021-01-30 00:00:00'),
(157, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(158, '13', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(159, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(160, '13', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(161, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(162, '13', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(163, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(164, '13', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(165, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(166, '13', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(167, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(168, '13', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(169, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(170, '13', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(171, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(172, '13', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(173, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(174, '13', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(175, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(176, '13', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(177, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(178, '13', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(179, '13', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(180, '13', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(181, '15', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(182, '15', 'jasdak', '28', 3, 100000, '2021-01-30 00:00:00'),
(183, '15', 'jack', '26', 2, 100000, '2021-01-30 00:00:00'),
(184, '16', 'jasasdadadasadadadasddak', '28', 3, 100000, '2021-01-30 00:00:00'),
(185, '17', 'jack', '26', 2, 100000, '2021-02-01 00:00:00'),
(187, '17', 'jack', '26', 2, 100000, '2021-02-08 00:00:00'),
(188, '18', 'jasasdadadasadadadasddak', '28', 3, 100000, '2021-02-08 00:00:00'),
(189, '0012', 'maimunah', '139', 1, 15000, '2021-02-08 00:00:00'),
(190, '0012', 'maimunah', '138', 1, 30000, '2021-02-08 00:00:00'),
(191, '0012', 'maimunah', '137', 1, 25000, '2021-02-08 00:00:00'),
(192, '0012', 'maimunah', '139', 1, 15000, '2021-02-08 00:00:00'),
(193, '0012', 'maimunah', '138', 1, 30000, '2021-02-08 00:00:00'),
(194, '19', 'maimunah', '137', 1, 25000, '2021-02-08 00:00:00'),
(195, '19', 'maimunah', '139', 1, 15000, '2021-02-08 00:00:00'),
(196, '19', 'maimunah', '138', 1, 30000, '2021-02-08 00:00:00'),
(197, '19', 'maimunah', '137', 1, 25000, '2021-02-08 00:00:00'),
(198, '19', 'maimunah', '139', 2, 15000, '2021-02-08 00:00:00'),
(199, '19', 'maimunah', '137', 1, 25000, '2021-02-08 00:00:00'),
(200, '19', 'maimunah', '138', 1, 30000, '2021-02-08 00:00:00'),
(201, '19', 'maimunah', '139', 1, 15000, '2021-02-08 00:00:00'),
(202, '19', 'maimunah', '138', 1, 30000, '2021-02-08 00:00:00'),
(203, '19', 'maimunah', '138', 1, 30000, '2021-02-08 00:00:00'),
(204, '19', 'maimunah', '137', 1, 25000, '2021-02-08 00:00:00'),
(205, '19', 'maimunah', '141', 1, 9000, '2021-02-08 00:00:00'),
(206, '19', 'maimunah', '142', 1, 12000, '2021-02-08 00:00:00'),
(207, '19', 'maimunah', '140', 1, 35000, '2021-02-08 00:00:00'),
(208, '19', 'maimunah', '144', 1, 35000, '2021-02-08 00:00:00'),
(209, '19', 'maimunah', '143', 1, 20000, '2021-02-08 00:00:00'),
(210, '19', 'maimunah', '139', 1, 15000, '2021-02-08 00:00:00'),
(211, '19', 'maimunah', '138', 1, 30000, '2021-02-08 00:00:00'),
(212, '19', 'maimunah', '137', 1, 25000, '2021-02-08 00:00:00'),
(213, '19', 'maimunah', '140', 1, 35000, '2021-02-08 00:00:00'),
(214, '19', 'maimunah', '139', 1, 15000, '2021-02-08 00:00:00'),
(215, '19', 'maimunah', '138', 1, 30000, '2021-02-08 00:00:00'),
(216, '19', 'maimunah', '137', 1, 25000, '2021-02-08 00:00:00'),
(217, '19', 'maimunah', '139', 1, 15000, '2021-02-08 00:00:00'),
(218, '19', 'maimunah', '139', 1, 15000, '2021-03-03 00:00:00'),
(219, '19', 'maimunah', '137', 1, 25000, '2021-03-03 00:00:00'),
(220, '19', 'admin', '138', 1, 30000, '2021-03-07 00:00:00'),
(221, '19', 'admin', '139', 1, 15000, '2021-03-07 00:00:00'),
(222, '19', 'admin', '139', 1, 15000, '2021-03-07 00:00:00'),
(223, '19', 'admin', '138', 1, 30000, '2021-03-07 00:00:00'),
(224, '19', 'admin', '137', 1, 25000, '2021-03-07 00:00:00'),
(225, '449437', 'kasir', '1', 1, 23000, '2021-03-08 00:00:00'),
(226, '937957', 'kasir', '2', 2, 123313, '2021-03-08 00:00:00'),
(227, '937957', 'kasir', '1', 2, 23000, '2021-03-08 00:00:00'),
(228, '726526', 'aridwi', '9', 2, 13000, '2021-03-09 00:00:00'),
(229, '726526', 'aridwi', '10', 3, 34000, '2021-03-09 00:00:00'),
(230, '412051', 'aridwi', '10', 2, 34000, '2021-03-09 00:00:00'),
(231, '412051', 'aridwi', '9', 2, 13000, '2021-03-09 00:00:00'),
(232, '717781', 'kasir', '10', 1, 34000, '2021-03-09 00:00:00'),
(233, '717781', 'kasir', '9', 1, 13000, '2021-03-09 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `id_category` int(10) NOT NULL,
  `price` int(100) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `id_category`, `price`, `image`, `date`) VALUES
(9, 'alpukat', 1, 13000, '1615240951093.jpg', '2021-03-09 06:02:31'),
(10, 'burger chiken', 2, 34000, '1615240986753.jpg', '2021-03-09 06:03:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `level`) VALUES
(1, 'admin', 'admin@gmail.com', '$2b$10$2q5//1Z3iCZC2v3L.4Bb0e/Iwa29Qp3XQ7BEuSnEUF1nuBOo5WBhO', 2),
(2, 'kasir', 'kasir@gmail.om', '$2b$10$lyqfvfy0qok407l33nyQ8O7MNIk.yhM1lCjX6uMwWDXoIYdxoLWde', 1),
(3, 'dwi', 'dwi@gmail.com', '$2b$10$n5HsAIXvNnOweyMnWzZ6AutZ7GSXlyjhJ3Cz46UPulrXyGRjBEbjS', 1),
(4, 'asda', 'admin1@gmail.com', '$2b$10$PFfSxxMt1N/3I6YSyNdWr.ydIgZzB5Bi1Dc7ITf4Hm9br2Nn.huFG', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=234;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
