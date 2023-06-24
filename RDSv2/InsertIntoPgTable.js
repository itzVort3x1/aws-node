const { Client } = require("pg");

const client = new Client({
	host: "kaustubhdb-pg.candhndqc4uh.ap-south-1.rds.amazonaws.com",
	user: "postgres",
	password: "password",
	database: "pgdatabase",
	port: 5432,
});

const InsertData = () => {
	client.connect();
	client.query(
		"INSERT INTO Employee (NAME, EMAIL) VALUES ('kaustubh', 'kaustubh@email.com')",
		(err, res) => {
			if (!err) {
				console.log(res);
			} else {
				console.log(err);
			}
		}
	);
};

InsertData();
