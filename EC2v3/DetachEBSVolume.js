const { EC2Client, DetachVolumeCommand } = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client();

const params = {
	VolumeId: "VOLUME_ID",
};

const run = async () => {
	try {
		const data = await ec2Client.send(new DetachVolumeCommand(params));
		console.log(data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
