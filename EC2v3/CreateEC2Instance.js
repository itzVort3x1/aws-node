const { EC2Client, RunInstancesCommand } = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client({
	region: "ap-south-1",
});

const params = {
	ImageId: "ami-057752b3f1d6c4d6c", // IMAGE_ID
	MinCount: 1,
	MaxCount: 1,
	InstanceType: "t2.micro",
	KeyName: "v3Key",
	SecurityGroups: ["v3SecurityGroup"],
};

const run = async () => {
	try {
		const data = await ec2Client.send(new RunInstancesCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
