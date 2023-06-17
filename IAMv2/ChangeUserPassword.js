const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
	NewPassword: "newpassword",
	OldPassword: "oldpassword",
	UserName: "bob",
};

iam.changePassword(params, function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
