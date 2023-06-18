const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient();

const params = {
	TableName: "Employee",
	Key: {
		Id: { N: "1" },
	},
};

const run = async () => {
	try {
		const data = await dbclient.send(new GetItemCommand(params));
		console.log("Item is retrieved", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
