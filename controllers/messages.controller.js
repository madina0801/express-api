const path = require('path');

function getMessages(req, res) {
	res.sendFile(path.join(__dirname, '..', 'public', 'friends.jpg'));
	// res.send('Nice to meet you!');
}

function postMessage(req, res) {
	console.log('Updating messages');
}

module.exports = {
	getMessages,
	postMessage,
}