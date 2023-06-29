import { EC2Client, CreateVolumeCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
	AvailabilityZone: "us-east-1d",
	Size: 5,
	VolumeType: "gp2",
};

const run = async () => {
	try {
		const data = await ec2Client.send(new CreateVolumeCommand(params));
		console.log(data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
