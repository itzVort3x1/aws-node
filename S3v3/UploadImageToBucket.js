const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const { readFileSync } = require("fs");

const s3Client = new S3Client();

const run = async (fileName) => {
	try {
		const fileContent = readFileSync(fileName);
		const bucketParams = {
			Bucket: "kaustubh10",
			Key: "awsimg2.png",
			Body: fileContent,
		};
		const data = await s3Client.send(new PutObjectCommand(bucketParams));
		console.log("Image is uploaded", data);
		return data; // For unit tests.
	} catch (err) {
		console.log("Error", err);
	}
};

run("aws.png");
