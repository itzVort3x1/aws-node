const {
	DynamoDBClient,
	UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient();

const params = {
	TableName: "Employee",
	Key: {
		Id: { N: "1" },
	},
	UpdateExpression: "set LastName = :l",
	ExpressionAttributeValues: {
		":l": { S: "Smith" },
	},
	ReturnValues: "UPDATED_NEW", // optional (NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW)
};

const run = async () => {
	try {
		const data = await dbclient.send(new UpdateItemCommand(params));
		console.log("Item is updated", data);
	} catch (err) {
		console.log("Error", err);
	}
};

run();
