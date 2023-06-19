const { S3Client, CopyObjectCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client();

const params = {
	Bucket: "kaustubh11",
	CopySource: "/kaustubh10/awsimg1.png",
	Key: "awsimg.png",
};

const run = async () => {
	try {
		const data = await s3Client.send(new CopyObjectCommand(params));
		console.log("Success", data);
		return data; // For unit tests.
	} catch (err) {
		console.log("Error", err);
	}
};

run();
