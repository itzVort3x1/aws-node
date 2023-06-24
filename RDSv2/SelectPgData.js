const { Client } = require("pg");

const client = new Client({
	host: "kaustubhdb-pg.candhndqc4uh.ap-south-1.rds.amazonaws.com",
	user: "postgres",
	password: "password",
	database: "pgdatabase",
	port: 5432,
});

const SelectData = () => {
	client.connect();
	client.query("SELECT * FROM Employee", (err, res) => {
		if (!err) {
			console.log(res.rows);
		} else {
			console.log(err);
		}
	});
};

SelectData();
