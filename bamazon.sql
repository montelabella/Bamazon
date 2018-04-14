DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);



INSERT INTO products(product_name, department_name, price, stock_quantity)
 VALUES ("Cat Dress", "Womens Clothing", 30.00, 22);
 INSERT INTO products(product_name, department_name, price, stock_quantity)
 VALUES ("Cat Shoes", "Womens Shoes", 25.00, 13);
 INSERT INTO products(product_name, department_name, price, stock_quantity)
 VALUES ("Cat Purse", "Bags", 32.00, 38);
 INSERT INTO products(product_name, department_name, price, stock_quantity)
 VALUES ("Cat Bracelet", "Jewelry", 76.00, 4);
 INSERT INTO products(product_name, department_name, price, stock_quantity)
 VALUES ("Cat Pillow", "Bedroom", 120.00, 19);
 INSERT INTO products(product_name, department_name, price, stock_quantity)
 VALUES ("Cat Book", "Books", 12.00, 22);
 INSERT INTO products(product_name, department_name, price, stock_quantity)
 VALUES ("Cat Dishes", "Kitchenware", 200.00, 3);
 INSERT INTO products(product_name, department_name, price, stock_quantity)
 VALUES ("Cat Food", "Pet Supplies", 12.50, 56);
 INSERT INTO products(product_name, department_name, price, stock_quantity)
 VALUES ("Cat Headphones", "Electronics", 44.00, 32);
 INSERT INTO products(product_name, department_name, price, stock_quantity)
 VALUES ("Cat Car Decals", "Automotive", 3.00, 100);


SELECT*FROM products
