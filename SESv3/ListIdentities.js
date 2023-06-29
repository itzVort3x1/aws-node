const {
	SESClient,
	ListIdentitiesCommand,
	SES,
} = require("@aws-sdk/client-ses");

const sesClient = new SESClient();

const params = {
	IdentityType: "EmailAddress",
};

const run = async () => {
	try {
		const data = await sesClient.send(new ListIdentitiesCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
