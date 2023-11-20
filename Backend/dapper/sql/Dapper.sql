-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)
--
-- Host: localhost    Database: Dapper
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `addressId` int NOT NULL AUTO_INCREMENT,
  `street` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `postalCode` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`addressId`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--DES

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill` (
  `billId` int NOT NULL AUTO_INCREMENT,
  `orderId` int NOT NULL,
  `issueDate` date NOT NULL,
  `dueDate` date NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  PRIMARY KEY (`billId`),
  UNIQUE KEY `orderId` (`orderId`),
  CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `order` (`orderId`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customerId` int NOT NULL,
  `addressId` int DEFAULT NULL,
  PRIMARY KEY (`customerId`),
  KEY `fk_customer_address` (`addressId`),
  CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `user` (`userId`),
  CONSTRAINT `fk_address` FOREIGN KEY (`addressId`) REFERENCES `address` (`addressId`),
  CONSTRAINT `fk_customer_address` FOREIGN KEY (`addressId`) REFERENCES `address` (`addressId`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `itemId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `seasons` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `imageURL` varchar(255) DEFAULT NULL,
  `colorScheme` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`itemId`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itempackage`
--

DROP TABLE IF EXISTS `itempackage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itempackage` (
  `itemPackageId` int NOT NULL AUTO_INCREMENT,
  `orderId` int NOT NULL,
  `quantity` int NOT NULL,
  `itemDescription` varchar(255) DEFAULT NULL,
  `stylistId` int DEFAULT NULL,
  `itemId` int DEFAULT NULL,
  PRIMARY KEY (`itemPackageId`),
  KEY `orderId` (`orderId`),
  KEY `fk_itempackage_stlyist` (`stylistId`),
  KEY `fk_itempackage_item` (`itemId`),
  CONSTRAINT `fk_itempackage_item` FOREIGN KEY (`itemId`) REFERENCES `item` (`itemId`),
  CONSTRAINT `fk_itempackage_stlyist` FOREIGN KEY (`stylistId`) REFERENCES `stylist` (`stylistId`),
  CONSTRAINT `itempackage_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `order` (`orderId`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itempackage`
--

LOCK TABLES `itempackage` WRITE;
/*!40000 ALTER TABLE `itempackage` DISABLE KEYS */;
/*!40000 ALTER TABLE `itempackage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `orderId` int NOT NULL AUTO_INCREMENT,
  `customerId` int NOT NULL,
  `orderDate` date NOT NULL,
  `deliveryDate` date DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`orderId`),
  KEY `customerId` (`customerId`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customer` (`customerId`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentinformation`
--

DROP TABLE IF EXISTS `paymentinformation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentinformation` (
  `paymentId` int NOT NULL AUTO_INCREMENT,
  `creditCardNumber` varchar(255) NOT NULL,
  `nameOnCard` varchar(255) NOT NULL,
  `expirationDate` date NOT NULL,
  `addressId` int NOT NULL,
  PRIMARY KEY (`paymentId`),
  KEY `addressId` (`addressId`),
  CONSTRAINT `paymentinformation_ibfk_1` FOREIGN KEY (`addressId`) REFERENCES `address` (`addressId`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentinformation`
--

LOCK TABLES `paymentinformation` WRITE;
/*!40000 ALTER TABLE `paymentinformation` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymentinformation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preference`
--

DROP TABLE IF EXISTS `preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preference` (
  `customerId` int NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`customerId`),
  CONSTRAINT `preference_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customer` (`customerId`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preference`
--

LOCK TABLES `preference` WRITE;
/*!40000 ALTER TABLE `preference` DISABLE KEYS */;
/*!40000 ALTER TABLE `preference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `reviewId` int NOT NULL AUTO_INCREMENT,
  `customerId` int NOT NULL,
  `stylistId` int NOT NULL,
  `rating` int NOT NULL,
  `comment` text,
  `reviewDate` date NOT NULL,
  PRIMARY KEY (`reviewId`),
  KEY `customerId` (`customerId`),
  KEY `stylistId` (`stylistId`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customer` (`customerId`),
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`stylistId`) REFERENCES `stylist` (`stylistId`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stylist`
--

DROP TABLE IF EXISTS `stylist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stylist` (
  `stylistId` int NOT NULL,
  `bio` text,
  `profilePictureURL` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`stylistId`),
  CONSTRAINT `stylist_ibfk_1` FOREIGN KEY (`stylistId`) REFERENCES `user` (`userId`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stylist`
--

LOCK TABLES `stylist` WRITE;
/*!40000 ALTER TABLE `stylist` DISABLE KEYS */;
/*!40000 ALTER TABLE `stylist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscription` (
  `customerId` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `type` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date DEFAULT NULL,
  PRIMARY KEY (`customerId`),
  CONSTRAINT `subscription_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customer` (`customerId`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription`
--

LOCK TABLES `subscription` WRITE;
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `emailAddress` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `emailAddress` (`emailAddress`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-20  9:58:18
