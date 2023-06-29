const { EC2Client, DescribeVolumesCommand } = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client();

const run = async () => {
	try {
		const data = await ec2Client.send(new DescribeVolumesCommand({}));
		console.log(data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
