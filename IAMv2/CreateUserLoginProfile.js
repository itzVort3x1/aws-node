const AWS = require("aws-sdk");

const iam = new AWS.IAM();

// params for creating a login profile in aws

const params = {
	UserName: "bob",
	Password: "h]6EszR}vJ*m",
	PasswordResetRequired: true,
};

iam.createLoginProfile(params, function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
