const {
	EC2Client,
	CreateSecurityGroupCommand,
} = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client({ region: "ap-south-1" });

const params = {
	Description: "v3SecurityGroup",
	GroupName: "v3SecurityGroup",
};

const run = async () => {
	try {
		const data = await ec2Client.send(new CreateSecurityGroupCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
