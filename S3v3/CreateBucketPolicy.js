const { S3Client, PutBucketPolicyCommand } = require("@aws-sdk/client-s3");

const scClient = new S3Client();

const BUCKET = "kaustubh10";

const readOnlyUserPolicy = {
	Version: "2012-10-17",
	Statement: [
		{
			Sid: "AddPerm",
			Effect: "Allow",
			Principal: "*",
			Action: ["s3:GetObject"],
			Resource: [""],
		},
	],
};

const bucketResource = `arn:aws:s3:::${BUCKET}/*`;
readOnlyUserPolicy.Statement[0].Resource[0] = bucketResource;

const bucketPolicyParams = {
	Bucket: BUCKET,
	Policy: JSON.stringify(readOnlyUserPolicy),
};

const run = async () => {
	try {
		const data = await scClient.send(
			new PutBucketPolicyCommand(bucketPolicyParams)
		);
		console.log("Success", data);
		return data; // For unit tests.
	} catch (err) {
		console.log("Error", err);
	}
};

run();
