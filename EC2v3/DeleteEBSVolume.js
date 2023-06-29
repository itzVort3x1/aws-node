const { EC2Client, DeleteVolumeCommand } = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client();

const params = {
	VolumeId: "VOLUME_ID", // VOLUME_ID
};

const run = async () => {
	try {
		const data = await ec2Client.send(new DeleteVolumeCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
