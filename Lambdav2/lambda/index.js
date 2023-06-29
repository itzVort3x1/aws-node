exports.handler = (event) => {
	const response = {
		statusCode: 200,
		body: JSON.stringify("Hello From Javascript"),
	};

	return response;
};
