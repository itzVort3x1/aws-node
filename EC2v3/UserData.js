const { EC2Client, RunInstancesCommand } = require("@aws-sdk/client-ec2");

const ec2Client = new EC2Client();

const userData = `
#!/bin/bash
yum update -y 
yum install -y httpd
chkconfig httpd on
service httpd start
echo "<h1>Welcome to AWS with Javascript course</h1>" > /var/www/html/index.html`;

const userDataEncoded = new Buffer(userData).toString("base64");

const params = {
	ImageId: "ami-057752b3f1d6c4d6c",
	MinCount: 1,
	MaxCount: 1,
	InstanceType: "t2.micro",
	KeyName: "myKey",
	SecurityGroup: "v3SecurityGroup",
	userData: userDataEncoded,
};

const run = async () => {
	try {
		const data = await ec2Client.send(new RunInstancesCommand(params));
		console.log("Success", data);
	} catch (err) {
		console.log("error", err);
	}
};

run();
