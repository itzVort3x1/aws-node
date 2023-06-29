const { EC2Client, AttachVolumeCommand } = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client();

const params = {
	Device: "/dev/sdh",
	InstanceId: "INSTANCE_ID",
	VolumeId: "VOLUME_ID",
};

const run = async () => {
	try {
		const data = await ec2Client.send(new AttachVolumeCommand(params));
		console.log(data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
