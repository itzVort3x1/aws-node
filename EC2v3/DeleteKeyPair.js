const { EC2Client, DeleteKeyPairCommand } = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client({ region: "ap-south-1" });

const params = {
	KeyName: "v3Key", // KEY_PAIR_NAME
};

const run = async () => {
	try {
		const data = await ec2Client.send(new DeleteKeyPairCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
