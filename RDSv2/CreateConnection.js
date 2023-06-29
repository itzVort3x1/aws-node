const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "node-example.candhndqc4uh.ap-south-1.rds.amazonaws.com",
	user: "admin",
	password: "password",
});

connection.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Connected to MySQL");
	}
});
