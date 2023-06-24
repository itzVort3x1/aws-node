const AWS = require("aws-sdk");

const rds = new AWS.RDS({ region: "ap-south-1" });

const params = {
	DBInstanceIdentifier: "kaustubhdb",
	DeleteAutomatedBackups: true,
	FinalDBSnapshotIdentifier: "kaustubhdb-final-snapshot",
	SkipFinalSnapshot: false,
};

rds.deleteDBInstance(params, (err, data) => {
	if (err) console.log(err, err.stack);
	else console.log(data);
});
