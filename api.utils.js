const got = require('got');

async function post(sql, options, logger) {
	try {
		let payload = {
			"warehouse_id": options.warehouseid,
			"statement": sql,
			"wait_timeout": "10s",
			"on_wait_timeout": "CANCEL"
		}
		logger.trace(`post(): Payload :: ${JSON.stringify(payload)}`);
		const URL = `https://${options.host}/api/2.0/sql/statements`;
		logger.trace(`post(): URL :: ${URL}`);
		const response = await got.post(URL, {
			json: payload,
			headers: {
				"Authorization": `Bearer ${options.token}`,
				"Content-Type": "application/json"
			}
		}).json();
		logger.trace(`post(): Response :: ${JSON.stringify(response)}`);
		return response;
	} catch (error) {
		console.log(error.response);
		return null;
	}
}


module.exports = {
	post
}