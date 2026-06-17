-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: hireon1
-- ------------------------------------------------------
-- Server version	8.0.43

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Nusrath','test@gmail.com','$2b$10$cuBRW4E7exig619rbmJkzuCid.yFJJglxOb6T/.gaJ0oINsqHK7/i','2025-12-10 16:13:40','2025-12-10 16:13:40'),(2,'Nusrath','test1@gmail.com','$2b$10$kC7OWqImRnx8Y8D0mCsq/Oj39JIhgwEJGhRsZlQVaRHWagNK2iSg.','2025-12-10 16:19:26','2025-12-10 16:19:26'),(3,'nusrath','tests@gmail.com','$2b$10$yk.y8BygJXASQieGP2yDgOlj3OkMcdOXwozExaWPHUW9.EQEc/5H2','2025-12-10 16:33:27','2025-12-10 16:33:27'),(4,'Nusrath','nusrath@gmail.com','$2b$10$p17v7Gg7oRYHXgbkEOVRROm.Fi4p/5WMyqhttWnL5TUjbspkfvbWu','2025-12-11 06:54:07','2025-12-11 06:54:07'),(5,'1234','1234@gmail.com','$2b$10$C0SEti1NHR.PqXbfyso1Oe3uvn38u5neOjEoVCxDFGmkbLFDzGCby','2025-12-11 06:58:12','2025-12-11 06:58:12'),(6,'Ahad','ahad@gmail.com','$2b$10$C.NyBg.8tV3dsMjZ/y4V9Ol4FaeM9zBJatv.20/jrOfOtzsodY9IW','2025-12-11 07:03:01','2025-12-11 07:03:01'),(7,'abcd','abcd@gmail.com','$2b$10$xiUJFdGZLuJDcpzqrtkxs.SjOLsVXfx/.peNnW7gsyanfJ3BQobEC','2025-12-11 15:06:08','2025-12-11 15:06:08');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-11 20:48:21
