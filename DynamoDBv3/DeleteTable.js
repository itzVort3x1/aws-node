const {
	DynamoDBClient,
	DeleteTableCommand,
} = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient();

const params = {
	TableName: "Employee",
};

const run = async () => {
	try {
		const data = await dbclient.send(new DeleteTableCommand(params));
		console.log("Table is deleted", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
