const {
	DynamoDBClient,
	ListTablesCommand,
} = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient();

const run = async () => {
	try {
		const data = await dbclient.send(new ListTablesCommand({}));
		console.log("Tables", data.TableNames);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
