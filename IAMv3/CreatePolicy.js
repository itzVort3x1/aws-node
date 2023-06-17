const { IAMClient, CreatePolicyCommand } = require("@aws-sdk/client-iam");

const iam = new IAMClient();

const params = {
	PolicyDocument:
		'{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": "s3:*", "Resource": "*" } ] }',
	PolicyName: "newuserfullpolicy2",
	Description: "This is a new policy for a new user",
};

const run = async () => {
	const data = await iam.send(new CreatePolicyCommand(params));
	console.log("Success", data);
};

run();
