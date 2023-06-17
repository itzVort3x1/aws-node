const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
	PolicyArn: "arn:aws:iam::153341582963:policy/newuserfullpolicy",
	UserName: "bob",
};

iam.attachUserPolicy(params, function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
