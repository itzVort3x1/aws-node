const { EC2Client, CreateKeyPairCommand } = require("@aws-sdk/client-ec2");
const { writeFileSync } = require("fs");

const ec2Client = new EC2Client({ region: "ap-south-1" });

const params = {
	KeyName: "v3Key", // KEY_PAIR_NAME
	KeyType: "rsa",
};

const run = async () => {
	try {
		const data = await ec2Client.send(new CreateKeyPairCommand(params));
		console.log("Success", data);
		writeFileSync("v3Key.pem", data.KeyMaterial, (err) => {
			if (err) console.log("Error", err);
			console.log("File has been created");
		});
	} catch (err) {
		console.log("Error", err);
	}
};

run();
