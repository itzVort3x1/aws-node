const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "kaustubhdb.candhndqc4uh.ap-south-1.rds.amazonaws.com",
	user: "admin",
	password: "password",
	port: 3306,
});

connection.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Connected to MySQL");
	}
});