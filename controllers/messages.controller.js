function getMessages(req, res) {
	res.send('Nice to meet you!');
}

function postMessage(req, res) {
	console.log('Updating messages');
}

module.exports = {
	getMessages,
	postMessage,
}