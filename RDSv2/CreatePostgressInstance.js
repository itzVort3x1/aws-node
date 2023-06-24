const AWS = require("aws-sdk");

const { Client } = require("pg");

const client = new Client({
	host: "kaustubhdb-pg.candhndqc4uh.ap-south-1.rds.amazonaws.com",
	user: "postgres",
	password: "password",
	port: 5432,
});

const createData = () => {
	client.connect();
	client.query("CREATE DATABASE pgdatabase", (err, result) => {
		if (!err) {
			console.log(result);
		} else {
			console.log(err);
		}
		client.end();
	});
};

createData();
