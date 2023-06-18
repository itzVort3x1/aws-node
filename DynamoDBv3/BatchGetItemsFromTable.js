const {
	DynamoDBClient,
	BatchGetItemCommand,
} = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient();

const params = {
	RequestItems: {
		Employee: {
			Keys: [
				{
					Id: { N: "1" },
				},
				{
					Id: { N: "2" },
				},
			],
		},
	},
};

const run = async () => {
	try {
		const data = await dbclient.send(new BatchGetItemCommand(params));
		console.log("Items are retrieved", data.Responses["Employee"]);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
