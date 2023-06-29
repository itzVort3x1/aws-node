const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "node-example.candhndqc4uh.ap-south-1.rds.amazonaws.com",
	user: "admin",
	password: "password",
	database: "restapi",
	port: 3306,
});

connection.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Connected to MySQL");
		connection.query(
			"CREATE TABLE customers (name VARCHAR(255), email VARCHAR(255))",
			(err, data) => {
				if (err) {
					console.log(err);
				} else {
					console.log("Table created");
				}
			}
		);
	}
});
