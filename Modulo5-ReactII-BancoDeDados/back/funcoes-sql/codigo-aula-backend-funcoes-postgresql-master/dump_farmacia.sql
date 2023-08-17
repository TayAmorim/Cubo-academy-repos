DROP TABLE IF EXISTS "farmacia";

CREATE TABLE "farmacia" (
  id SERIAL PRIMARY KEY,
  categoria varchar(255) default NULL,
  medicamento varchar(255) default NULL,
  estoque integer NULL
);

INSERT INTO "farmacia" (id,categoria,medicamento,estoque) VALUES (1,'yellow','Alprazolam',40),(2,'green','Endocet',67),(3,'blue','Lisinopril/Hydrochlorothiazide',74),(4,'yellow','Metformin HCl',62),(5,'blue','Alprazolam',12),(6,'black','Ventolin HFA',38),(7,'yellow','Advair Diskus',51),(8,'green','Pravastatin Sodium',77),(9,'black','Azithromycin',31),(10,'yellow','Lisinopril',78);
INSERT INTO "farmacia" (id,categoria,medicamento,estoque) VALUES (11,'green','Trazodone HCl',12),(12,'yellow','Trazodone HCl',24),(13,'red','Omeprazole (Rx)',72),(14,'blue','Zolpidem Tartrate',29),(15,'black','Ciprofloxacin HCl',55),(16,'green','Lexapro',8),(17,'yellow','Triamterene/Hydrochlorothiazide',64),(18,'red','Prednisone',57),(19,'blue','Tramadol HCl',35),(20,'blue','Atenolol',73);
INSERT INTO "farmacia" (id,categoria,medicamento,estoque) VALUES (21,'green','Lisinopril',42),(22,'red','Simvastatin',50),(23,'blue','Vitamin D (Rx)',55),(24,'yellow','APAP/Codeine',66),(25,'blue','Alprazolam',51),(26,'black','Hydrochlorothiazide',5),(27,'red','Lantus',13),(28,'green','Amoxicillin',30),(29,'blue','Oxycodone/APAP',13),(30,'green','Diovan HCT',16);
INSERT INTO "farmacia" (id,categoria,medicamento,estoque) VALUES (31,'yellow','Lisinopril',8),(32,'blue','Glipizide',55),(33,'blue','Omeprazole (Rx)',2),(34,'yellow','Suboxone',20),(35,'blue','Fluoxetine HCl',22),(36,'yellow','Lovastatin',60),(37,'red','Gabapentin',21),(38,'green','Atenolol',32),(39,'black','Seroquel',63),(40,'blue','Alprazolam',45);
INSERT INTO "farmacia" (id,categoria,medicamento,estoque) VALUES (41,'green','Carvedilol',56),(42,'green','Simvastatin',31),(43,'green','Fluoxetine HCl',32),(44,'black','TriNessa',24),(45,'blue','Pantoprazole Sodium',75),(46,'red','Omeprazole (Rx)',35),(47,'yellow','Lisinopril',62),(48,'green','Omeprazole (Rx)',11),(49,'red','Zyprexa',65),(50,'blue','Lorazepam',77);
INSERT INTO "farmacia" (id,categoria,medicamento,estoque) VALUES (51,'red','Metoprolol Succinate',72),(52,'yellow','Metformin HCl',1),(53,'blue','Alendronate Sodium',54),(54,'black','Amitriptyline HCl',19),(55,'blue','Potassium Chloride',65),(56,'green','Fluticasone Propionate',33),(57,'green','Tramadol HCl',73),(58,'red','Allopurinol',69),(59,'red','Ventolin HFA',13),(60,'green','Cephalexin',22);
INSERT INTO "farmacia" (id,categoria,medicamento,estoque) VALUES (61,'green','Diovan',26),(62,'green','Azithromycin',48),(63,'green','Metformin HCl',24),(64,'red','Alprazolam',70),(65,'black','Tramadol HCl',5),(66,'green','Carvedilol',1),(67,'blue','Simvastatin',58),(68,'red','Doxycycline Hyclate',41),(69,'red','Tamsulosin HCl',74),(70,'yellow','Glipizide',24);
INSERT INTO "farmacia" (id,categoria,medicamento,estoque) VALUES (71,'red','Hydrocodone/APAP',20),(72,'green','Furosemide',54),(73,'green','Metformin HCl',67),(74,'yellow','Januvia',65),(75,'blue','Levothyroxine Sodium',28),(76,'black','Sertraline HCl',14),(77,'black','Alprazolam',61),(78,'red','Famotidine',37),(79,'yellow','Lisinopril/Hydrochlorothiazide',77),(80,'green','Ranitidine HCl',10);
INSERT INTO "farmacia" (id,categoria,medicamento,estoque) VALUES (81,'red','TriNessa',61),(82,'red','Premarin',59),(83,'yellow','Folic Acid',75),(84,'green','Amlodipine Besylate',65),(85,'blue','Citalopram HBr',14),(86,'red','Omeprazole (Rx)',7),(87,'red','Metoprolol Succinatee',61),(88,'blue','Prednisone',67),(89,'yellow','Triamcinolone Acetonide',0),(90,'black','Furosemide',1);
INSERT INTO "farmacia" (id,categoria,medicamento,estoque) VALUES (91,'black','Spiriva Handihaler',34),(92,'yellow','LevothyroxineSodium',6),(93,'green','Lisinopril',17),(94,'green','Levoxyl',50),(95,'red','Ciprofloxacin HCl',39),(96,'green','Lexapro',3),(97,'yellow','Potassium Chloride',59),(98,'red','Gianvi',8),(99,'blue','Hydrochlorothiazide',4),(100,'black','Methylprednisolone',41);

