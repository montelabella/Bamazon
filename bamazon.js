// require necessary packages
var inquirer = require('inquirer');
var mysql = require("mysql");
var consoleTable = require('cli');

// connection to database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});
function connect(){
connection.connect(function (err) {
        if (err) throw err;
        disTable();
});
}
// display table 
var disTable = function () {
    connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    console.table(result);
    buyProd();
    });
}
disTable();

// application prompting user to enter items to purchase
var buyProd = function () {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Enter the ID of the item you wish to purchase",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
            }
            else {
                return false;
            }
        }
        
    },
    
        {
            name: "quantity",
            type: "input",
            message: "Enter the quantity you wish to purchase.",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                else {
                    return false;
                }
            }
           
//   check inventory / display result
  }]).then(function(answer) {
    var userId = answer.id;
    console.log("Chosen item id: " , userId);

    connection.query("SELECT * FROM products WHERE ?", { id: answer.id },
     function(err, res) {
        
      var cost = res[0].price * answer.quantity;
      if(res[0].stock_quantity < answer.quantity) {
        console.log('Sorry, we do not have enough in stock to complete your order. Choose a lesser quantity');
      } else {
          //calculate new total
          var qtyUpdate = parseInt(res[0].stock_quantity) - parseInt(answer.quantity);
          //update product purchased
          connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity: qtyUpdate
                  },
                  {
                    item_id: answer.item_number
                  }
                ],
            function(err, res) {
             if (err) throw err;
              console.log(`Your total cart is $${cost}`);
              });
        }
       
    //end connection
     
    }
    );
  });
}
//start connection
//removed end and start- throwing errors




