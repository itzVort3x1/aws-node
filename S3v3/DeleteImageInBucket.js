const { S3Client, DeleteObjectCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client();

const params = {
	Bucket: "kaustubh10",
	Key: "awsimg.png",
};

const run = async () => {
	try {
		const data = await s3Client.send(new DeleteObjectCommand(params));
		console.log("Success", data);
		return data; // For unit tests.
	} catch (err) {
		console.log("Error", err);
	}
};

run();
