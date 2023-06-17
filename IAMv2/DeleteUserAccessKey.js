const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
	UserName: "bob",
	AccessKeyId: "AKIASHM663ZZUCTICGFJ",
};

iam.deleteAccessKey(params, function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
