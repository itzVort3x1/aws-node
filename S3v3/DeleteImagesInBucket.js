const { S3Client, DeleteObjectsCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client();

const params = {
	Bucket: "kaustubh10",
	Delete: {
		Objects: [
			{
				Key: "awsimg.png",
			},
			{
				Key: "awsimg2.png",
			},
		],
	},
};

const run = async () => {
	try {
		const data = await s3Client.send(new DeleteObjectsCommand(params));
		console.log("Success", data);
		return data; // For unit tests.
	} catch (err) {
		console.log("Error", err);
	}
};

run();
