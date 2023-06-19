const { S3Client, DeleteBucketCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client();

const params = {
	Bucket: "kaustubh11",
};

const run = async () => {
	try {
		const data = await s3Client.send(new DeleteBucketCommand(params));
		console.log("Success", data);
		return data; // For unit tests.
	} catch (err) {
		console.log("Error", err);
	}
};

run();
