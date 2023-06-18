const {
	DynamoDBClient,
	BatchWriteItemCommand,
} = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient();

const params = {
	RequestItems: {
		Employee: [
			{
				PutRequest: {
					Item: {
						Id: { N: "1" },
						FirstName: { S: "John" },
						LastName: { S: "Doe" },
					},
				},
			},
			{
				PutRequest: {
					Item: {
						Id: { N: "3" },
						FirstName: { S: "John1" },
						LastName: { S: "Doe1" },
					},
				},
			},
		],
	},
};

const run = async () => {
	try {
		const data = await dbclient.send(new BatchWriteItemCommand(params));
		console.log("Items are inserted", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
