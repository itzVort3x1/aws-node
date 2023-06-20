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
			"DELETE FROM customers WHERE name = 'Kaustubh'",
			(err, data) => {
				if (err) {
					console.log(err);
				} else {
					console.log("Updated Data in Table: ", data);
				}
			}
		);
	}
});
