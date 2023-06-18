const {
	DynamoDBClient,
	DeleteItemCommand,
} = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient();

const params = {
	TableName: "Employee",
	Key: {
		Id: { N: "1" },
	},
};

const run = async () => {
	try {
		const data = await dbclient.send(new DeleteItemCommand(params));
		console.log("Item is deleted", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
