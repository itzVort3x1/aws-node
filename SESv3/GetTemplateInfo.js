const { SESClient, GetTemplateCommand } = require("@aws-sdk/client-ses");

const sesClient = new SESClient();

const params = {
	TemplateName: "V3Template", // TEMPLATE_NAME
};

const run = async () => {
	try {
		const data = await sesClient.send(new GetTemplateCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
