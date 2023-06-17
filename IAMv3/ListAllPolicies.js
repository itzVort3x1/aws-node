const { IAMClient, ListPoliciesCommand } = require("@aws-sdk/client-iam");

const iam = new IAMClient();

const run = async () => {
	try {
		const data = await iam.send(new ListPoliciesCommand({}));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
