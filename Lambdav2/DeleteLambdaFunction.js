const {
	LambdaClient,
	DeleteFunctionCommand,
} = require("@aws-sdk/client-lambda");

const lambdaClient = new LambdaClient();

const params = {
	FunctionName: "helloLambda", // Lambda function name
};

const run = async () => {
	try {
		const data = await lambdaClient.send(new DeleteFunctionCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
