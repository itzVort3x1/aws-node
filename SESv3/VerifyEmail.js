const { SESClient, VerifyEmailAddressCommand } = require("@aws-sdk/client-ses");

const sesClient = new SESClient();

const params = {
	EmailAddress: "saikaustubh10@gmail.com", // SES verified email address
};

const run = async () => {
	try {
		const data = await sesClient.send(new VerifyEmailAddressCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
