const {
	EC2Client,
	DescribeSecurityGroupsCommand,
} = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client({ region: "ap-south-1" });

const params = {};

const run = async () => {
	try {
		const data = await ec2Client.send(
			new DescribeSecurityGroupsCommand(params)
		);
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
