const {
	DynamoDBClient,
	CreateTableCommand,
} = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient();

const params = {
	TableName: "Employee",
	KeySchema: [
		{ AttributeName: "Id", KeyType: "HASH" }, //Partition key
	],
	AttributeDefinitions: [{ AttributeName: "Id", AttributeType: "N" }],
	ProvisionedThroughput: {
		ReadCapacityUnits: 3,
		WriteCapacityUnits: 3,
	},
};

const run = async () => {
	try {
		const data = await dbclient.send(new CreateTableCommand(params));
		console.log("Table is created", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
