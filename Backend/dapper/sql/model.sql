CREATE TABLE IF NOT EXISTS `customer`
(
  /*------------------------*/
  /* MEMBER VARIABLES       */
  /*------------------------*/

  /*customer Associations*/
  subscription_price VARCHAR(255),
  preference_size VARCHAR(255),
  user_name VARCHAR(255),
    PRIMARY KEY(subscription_price)

);





CREATE TABLE IF NOT EXISTS `user`
(
  /*------------------------*/
  /* MEMBER VARIABLES       */
  /*------------------------*/
  
  /*user Attributes*/
  name VARCHAR(255),
  email_address VARCHAR(255),
  password VARCHAR(255),
  user_id INT,
  PRIMARY KEY(name)

);





CREATE TABLE IF NOT EXISTS `stylist`
(
  /*------------------------*/
  /* MEMBER VARIABLES       */
  /*------------------------*/

  /*stylist Associations*/
  user_name VARCHAR(255),
  
  /*stylist Attributes*/
  bio VARCHAR(255),
  profile_picture_url VARCHAR(255),
  PRIMARY KEY(bio)

);





CREATE TABLE IF NOT EXISTS `review`
(
  /*------------------------*/
  /* MEMBER VARIABLES       */
  /*------------------------*/

  /*review Associations*/
  stylist_bio VARCHAR(255),
  
  /*review Attributes*/
  rating INT,
  comment VARCHAR(255),
  rating_id VARCHAR(255),
  PRIMARY KEY(rating)

);





CREATE TABLE IF NOT EXISTS `item_package`
(
  /*------------------------*/
  /* MEMBER VARIABLES       */
  /*------------------------*/

  /*item_package Associations*/
  order_order_id VARCHAR(255),
  stylist_bio VARCHAR(255),
  
  /*item_package Attributes*/
  item_package_id VARCHAR(255),
  PRIMARY KEY(item_package_id)

);





CREATE TABLE IF NOT EXISTS `item`
(
  /*------------------------*/
  /* MEMBER VARIABLES       */
  /*------------------------*/
  
  /*item Attributes*/
  size VARCHAR(255),
  price VARCHAR(255),
  UNKNOWN ID: attributeMany List<VARCHAR(255)>,
  color_scheme VARCHAR(255),
  brand VARCHAR(255),
  item_id VARCHAR(255),
  image_url VARCHAR(255),
  PRIMARY KEY(size)

);





CREATE TABLE IF NOT EXISTS `order`
(
  /*------------------------*/
  /* MEMBER VARIABLES       */
  /*------------------------*/

  /*order Associations*/
  customer_subscription_price VARCHAR(255),
  item_package_item_package_id VARCHAR(255),
  bill_issue_date DATE,
  
  /*order Attributes*/
  order_id VARCHAR(255),
  order_date DATE,
  delivery_date DATE,
  status VARCHAR(255),
  PRIMARY KEY(order_id)

);





CREATE TABLE IF NOT EXISTS `bill`
(
  /*------------------------*/
  /* MEMBER VARIABLES       */
  /*------------------------*/

  /*bill Associations*/
  order_order_id VARCHAR(255),
  
  /*bill Attributes*/
  issue_date DATE,
  due_date DATE,
  sum DOUBLE,
  PRIMARY KEY(issue_date)

);





CREATE TABLE IF NOT EXISTS `preference`
(
  /*------------------------*/
  /* MEMBER VARIABLES       */
  /*------------------------*/

  /*preference Associations*/
  customer_subscription_price VARCHAR(255),
  
  /*preference Attributes*/
  size VARCHAR(255),
  color VARCHAR(255),
  style VARCHAR(255),
  PRIMARY KEY(size)

);





CREATE TABLE IF NOT EXISTS `subscription`
(
  /*------------------------*/
  /* MEMBER VARIABLES       */
  /*------------------------*/

  /*subscription Associations*/
  customer_subscription_price VARCHAR(255),
  
  /*subscription Attributes*/
  price VARCHAR(255),
  type VARCHAR(255),
  start_date DATE,
  end_date DATE,
  outfits_per_month INT,
  subscription_price VARCHAR(255),
  subscription_price VARCHAR(255),
  subscription_price VARCHAR(255),
  subscription_price VARCHAR(255),
  subscription_price VARCHAR(255),
  subscription_price VARCHAR(255),
  PRIMARY KEY(price)

);





CREATE TABLE IF NOT EXISTS `payment_information`
(
  /*------------------------*/
  /* MEMBER VARIABLES       */
  /*------------------------*/

  /*payment_information Associations*/
  address_address VARCHAR(255),
  
  /*payment_information Attributes*/
  credit_card_number VARCHAR(255),
  name VARCHAR(255),
  expiration_date VARCHAR(255),
  PRIMARY KEY(credit_card_number)

);





CREATE TABLE IF NOT EXISTS `address`
(
  /*------------------------*/
  /* MEMBER VARIABLES       */
  /*------------------------*/

  /*address Associations*/
  customer_subscription_price VARCHAR(255),
  
  /*address Attributes*/
  address VARCHAR(255),
  postal_code VARCHAR(255),
  city VARCHAR(255),
  province VARCHAR(255),
  country VARCHAR(255),
  PRIMARY KEY(address)

);


ALTER TABLE `customer` ADD CONSTRAINT `fk_customer_subscription_price` FOREIGN KEY (`subscription_price`) REFERENCES `subscription`(`price`);
ALTER TABLE `customer` ADD CONSTRAINT `fk_customer_preference_size` FOREIGN KEY (`preference_size`) REFERENCES `preference`(`size`);
ALTER TABLE `customer` ADD CONSTRAINT `fk_customer_user_name` FOREIGN KEY (`user_name`) REFERENCES `user`(`name`);


ALTER TABLE `stylist` ADD CONSTRAINT `fk_stylist_user_name` FOREIGN KEY (`user_name`) REFERENCES `user`(`name`);

ALTER TABLE `review` ADD CONSTRAINT `fk_review_stylist_bio` FOREIGN KEY (`stylist_bio`) REFERENCES `stylist`(`bio`);

ALTER TABLE `item_package` ADD CONSTRAINT `fk_itempackage_order_order_id` FOREIGN KEY (`order_order_id`) REFERENCES `order`(`order_id`);
ALTER TABLE `item_package` ADD CONSTRAINT `fk_itempackage_stylist_bio` FOREIGN KEY (`stylist_bio`) REFERENCES `stylist`(`bio`);


ALTER TABLE `order` ADD CONSTRAINT `fk_order_customer_subscription_price` FOREIGN KEY (`customer_subscription_price`) REFERENCES `customer`(`subscription_price`);
ALTER TABLE `order` ADD CONSTRAINT `fk_order_item_package_item_package_id` FOREIGN KEY (`item_package_item_package_id`) REFERENCES `item_package`(`item_package_id`);
ALTER TABLE `order` ADD CONSTRAINT `fk_order_bill_issue_date` FOREIGN KEY (`bill_issue_date`) REFERENCES `bill`(`issue_date`);

ALTER TABLE `bill` ADD CONSTRAINT `fk_bill_order_order_id` FOREIGN KEY (`order_order_id`) REFERENCES `order`(`order_id`);

ALTER TABLE `preference` ADD CONSTRAINT `fk_preference_customer_subscription_price` FOREIGN KEY (`customer_subscription_price`) REFERENCES `customer`(`subscription_price`);

ALTER TABLE `subscription` ADD CONSTRAINT `fk_subscription_customer_subscription_price` FOREIGN KEY (`customer_subscription_price`) REFERENCES `customer`(`subscription_price`);

ALTER TABLE `payment_information` ADD CONSTRAINT `fk_paymentinformation_address_address` FOREIGN KEY (`address_address`) REFERENCES `address`(`address`);

ALTER TABLE `address` ADD CONSTRAINT `fk_address_customer_subscription_price` FOREIGN KEY (`customer_subscription_price`) REFERENCES `customer`(`subscription_price`);
