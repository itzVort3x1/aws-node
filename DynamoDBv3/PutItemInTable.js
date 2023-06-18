const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient();

const params = {
	TableName: "Employee",
	Item: {
		Id: { N: "2" },
		FirstName: { S: "John" },
		LastName: { S: "Doe" },
	},
};

const run = async () => {
	try {
		const data = await dbclient.send(new PutItemCommand(params));
		console.log("Item is inserted", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
