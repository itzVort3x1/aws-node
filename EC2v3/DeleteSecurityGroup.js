const {
	EC2Client,
	DeleteSecurityGroupCommand,
} = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client({ region: "ap-south-1" });

const params = {
	GroupName: "v3SecurityGroup", // SECURITY_GROUP_ID
};

const run = async () => {
	try {
		const data = await ec2Client.send(new DeleteSecurityGroupCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
