const {
	DynamoDBClient,
	DescribeTableCommand,
} = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient();

const params = {
	TableName: "Employee",
};

const run = async () => {
	try {
		const data = await dbclient.send(new DescribeTableCommand(params));
		console.log("Table is described", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
