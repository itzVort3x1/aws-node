const {
	IAMClient,
	CreateUserCommand,
	GetUserCommand,
} = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
	UserName: "test",
};

const run = async () => {
	try {
		const data = await iamClient.send(new GetUserCommand(params));
		console.log("User already exists", data);
		return data;
	} catch (err) {
		try {
			const result = await iamClient.send(new CreateUserCommand(params));
			console.log("User is created", err);
			return result;
		} catch (err) {
			console.log("Error creating user");
		}
	}
};

run();
