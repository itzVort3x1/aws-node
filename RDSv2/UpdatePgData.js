const { Client } = require("pg");

const client = new Client({
	host: "kaustubhdb-pg.candhndqc4uh.ap-south-1.rds.amazonaws.com",
	user: "postgres",
	password: "password",
	database: "pgdatabase",
	port: 5432,
});

const UpdateData = () => {
	client.connect();
	client.query(
		"UPDATE Employee SET NAME = 'kaustubh2' WHERE ID = 1",
		(err, res) => {
			if (!err) {
				console.log(res);
			} else {
				console.log(err);
			}
		}
	);
};

UpdateData();
