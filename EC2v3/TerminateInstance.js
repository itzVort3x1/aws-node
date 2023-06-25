const { EC2Client, TerminateInstancesCommand } = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client({ region: "ap-south-1" });

const params = {
	InstanceIds: ["i-0bf67bc6dd3ab39e4"], // INSTANCE_ID
};

const run = async () => {
	try {
		const data = await ec2Client.send(new TerminateInstancesCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
