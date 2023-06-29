const { EC2Client, ModifyVolumeCommand } = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client();

const params = {
	Size: 10,
	VolumeId: "VOLUME_ID",
};

const run = async () => {
	try {
		const data = await ec2Client.send(new ModifyVolumeCommand(params));
		console.log(data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
