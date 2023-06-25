const {
	EC2Client,
	AuthorizeSecurityGroupIngressCommand,
} = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client({ region: "ap-south-1" });

const params = {
	GroupId: "sg-0465c08789f8ac2e4", // SECURITY_GROUP_ID
	IpPermissions: [
		{
			IpProtocol: "tcp",
			FromPort: 80,
			ToPort: 80,
			IpRanges: [{ CidrIp: "0.0.0.0/0", Description: "my description" }],
		},
		{
			IpProtocol: "tcp",
			FromPort: 22,
			ToPort: 22,
			IpRanges: [{ CidrIp: "0.0.0.0/0", Description: "my description" }],
		},
	],
};

const run = async () => {
	try {
		const data = await ec2Client.send(
			new AuthorizeSecurityGroupIngressCommand(params)
		);
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
