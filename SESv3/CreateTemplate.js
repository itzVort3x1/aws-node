const { SESClient, CreateTemplateCommand } = require("@aws-sdk/client-ses");

const sesClient = new SESClient();

const params = {
	Template: {
		TemplateName: "V3Template", // TEMPLATE_NAME
		SubjectPart: "AWS SES course", // SUBJECT_LINE
		TextPart: "This is a test SES email", // TEXT_CONTENT
		HtmlPart: "This is a test SES email", // HTML_CONTENT
	},
};

const run = async () => {
	try {
		const data = await sesClient.send(new CreateTemplateCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
