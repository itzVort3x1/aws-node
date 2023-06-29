const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const sesClient = new SESClient();

const params = {
	Source: "saikaustubh10@gmail.com",
	Destination: {
		ToAddresses: ["saikaustubh10@gmail.com"],
		cc: [],
	},
	ReplyToAddresses: ["saikaustubh10@gmail.com"],
	Template: "V3Template",
};

const run = async () => {
	try {
		const data = await sesClient.send(new SendEmailCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
