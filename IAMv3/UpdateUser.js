const { IAMClient, UpdateUserCommand } = require("@aws-sdk/client-iam");

const iam = new IAMClient();

const params = {
	NewUserName: "bob",
	UserName: "bobby",
};

const run = async () => {
	try {
		const data = await iam.send(new UpdateUserCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
