const AWS = require("aws-sdk");

// AWS.config.updated({ regin: "ap-south-1" });

const rds = new AWS.RDS();

const params = {
	DBName: "kaustubhdb",
	DBInstanceIdentifier: "kaustubhdb",
	AllocatedStorage: 5,
	DBInstanceClass: "db.t2.micro",
	Engine: "mysql",
	MasterUsername: "admin",
	MasterUserPassword: "password",
	Port: 3306,
	EngineVersion: "8.0.32",
	PubliclyAccessible: true,
	StorageType: "gp2",
};

rds.createDBInstance(params, function (err, data) {
	if (err) {
		console.log(err, err.stack);
	} else {
		console.log(data);
	}
});
