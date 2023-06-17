const { IAMClient, ListUsersCommand } = require("@aws-sdk/client-iam");

const iam = new IAMClient();

const params = { MaxItems: 10 };

const run = async () => {
	const data = await iam.send(new ListUsersCommand(params));
	console.log("Success", data);
};

run();
