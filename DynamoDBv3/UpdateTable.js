const {
	DynamoDBClient,
	UpdateTableCommand,
} = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient();

const params = {
	TableName: "Employee",
	ProvisionedThroughput: {
		ReadCapacityUnits: 2,
		WriteCapacityUnits: 2,
	},
};

const run = async () => {
	try {
		const data = await dbclient.send(new UpdateTableCommand(params));
		console.log("Table is updated", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
