CREATE DATABASE IF NOT EXISTS listing_body;

USE listing_body;

CREATE TABLE `listing` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(40),
  `city` VARCHAR(30),
  `state` VARCHAR(30),
  `host_name` VARCHAR(40),
  `guests` INT,
  `beds` INT,
  `baths` INT,
  PRIMARY KEY (`id`)
);

CREATE TABLE `home_highlights` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `room_id` INT,
  `header` VARCHAR(30),
  `message` VARCHAR(80),
  `helpful` BOOLEAN,
  `not_helpful` BOOLEAN,
  PRIMARY KEY (`id`)
);

CREATE TABLE `house_rules` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `suitable_for_children` BOOLEAN,
  `smoking` BOOLEAN,
  `pets` BOOLEAN, 
  `events` BOOLEAN, 
  `check_in` INT, 
  `check_out` INT, 
  `custom_message` VARCHAR(150),
  `stair_access` BOOLEAN, 
  `security_deposit` INT,
  PRIMARY KEY (`id`)
);

CREATE TABLE `amenities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `room_id` INT,
  `basic` INT,
  `facilities` INT,
  `guest_access` INT,
  `dining` INT,
  `bed_and_bath` INT,
  `safety_features` INT,
  PRIMARY KEY (`id`)
);

CREATE TABLE `basic` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `wifi` BOOLEAN,
  `washer` BOOLEAN,
  `dryer` BOOLEAN,
  `laptop_friendly_workspace` BOOLEAN,
  `tv` BOOLEAN,
  `air conditioning` BOOLEAN,
  `essentials` BOOLEAN,
  PRIMARY KEY (`id`)
);

CREATE TABLE `facilities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `parking` BOOLEAN,
  `elevator` BOOLEAN,
  `hot_tub` BOOLEAN,
  PRIMARY KEY (`id`)
);

CREATE TABLE `guest_access` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `host_greets` BOOLEAN,
  `lockbox` BOOLEAN,
  PRIMARY KEY (`id`)
);

CREATE TABLE `dining` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `kitchen` BOOLEAN,
  PRIMARY KEY (`id`)
);

CREATE TABLE `bed_and_bath` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hair_dryer` BOOLEAN,
  `hangers` BOOLEAN,
  `shampoo` BOOLEAN,
  `bed_linens` BOOLEAN,
  `extra_pillows_blankets` BOOLEAN,
  PRIMARY KEY (`id`)
);

CREATE TABLE `safety_features` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fire_extinguisher` BOOLEAN,
  `smoke_detector` BOOLEAN,
  `first_aid` BOOLEAN,
  PRIMARY KEY (`id`)
);

ALTER TABLE `amenities` ADD FOREIGN KEY (`basic`) REFERENCES `basic`(`id`);
ALTER TABLE `amenities` ADD FOREIGN KEY (`room_id`) REFERENCES `listing`(`id`);
ALTER TABLE `amenities` ADD FOREIGN KEY (`facilities`) REFERENCES `facilities`(`id`);
ALTER TABLE `amenities` ADD FOREIGN KEY (`guest_access`) REFERENCES `guest_access`(`id`);
ALTER TABLE `amenities` ADD FOREIGN KEY (`dining`) REFERENCES `dining`(`id`);
ALTER TABLE `amenities` ADD FOREIGN KEY (`bed_and_bath`) REFERENCES `bed_and_bath`(`id`);
ALTER TABLE `amenities` ADD FOREIGN KEY (`safety_features`) REFERENCES `safety_features`(`id`);

LOAD DATA LOCAL INFILE './data/listing.csv'
INTO TABLE listing
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE './data/home-highlights.csv'
INTO TABLE home_highlights
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE './data/house-rules.csv'
INTO TABLE house_rules
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE './data/amenities.csv'
INTO TABLE amenities
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE './data/basic.csv'
INTO TABLE basic
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE './data/facilities.csv'
INTO TABLE facilities
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE './data/guest_access.csv'
INTO TABLE guest_access
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE './data/dining.csv'
INTO TABLE dining
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE './data/bed-and-bath.csv'
INTO TABLE bed_and_bath
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE './data/safety-features.csv'
INTO TABLE safety_features
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';
