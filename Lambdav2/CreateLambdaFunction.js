const {
	LambdaClient,
	CreateFunctionCommand,
} = require("@aws-sdk/client-lambda");

const lambdaClient = new LambdaClient();

const params = {
	Code: {
		S3Bucket: "lambda12",
		S3Key: "lambda.zip",
	},
	FunctionName: "helloLambda",
	Handler: "index.handler",
	Role: "arn:aws:iam::ACCOUNT_ID:role/JAVASCRIPT_LAMBDA_ROLE_NAME",
	Runtime: "nodejs14.x",
	Description: "DESCRIPTION",
	Timeout: 3,
};

const run = async () => {
	try {
		const data = await lambdaClient.send(new CreateFunctionCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
