const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
	Scope: "Local",
};

iam.listPolicies(params, (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
