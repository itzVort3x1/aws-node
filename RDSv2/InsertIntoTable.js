const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "kaustubhdb.candhndqc4uh.ap-south-1.rds.amazonaws.com",
	user: "admin",
	password: "password",
	database: "testdb",
	port: 3306,
});

connection.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Connected to MySQL");
		connection.query(
			"INSERT INTO customers (name, email) VALUES ('kaustubh', 'kaustubh@gmail.com')",
			(err, data) => {
				if (err) {
					console.log(err);
				} else {
					console.log("Inserted into table");
				}
			}
		);
	}
});
