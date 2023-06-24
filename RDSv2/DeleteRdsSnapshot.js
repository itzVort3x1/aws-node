const AWS = require("aws-sdk");

const rds = new AWS.RDS({ region: "ap-south-1" });

const params = {
	DBSnapshotIdentifier: "kaustubhdb-final-snapshot",
};

rds.deleteDBSnapshot(params, (err, data) => {
	if (err) console.log(err, err.stack);
	else console.log(data);
});
