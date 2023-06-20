const AWS = require("aws-sdk");

const rds = new AWS.RDS();

const params = {
	DBInstanceIdentifier: "kaustubhdb",
};

rds.describeDBInstances(params, function (err, data) {
	if (err) {
		console.log(err, err.stack);
	} else {
		console.log(data);
	}
});
