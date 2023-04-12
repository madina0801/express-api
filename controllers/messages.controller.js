const path = require('path');

function getMessages(req, res) {
	res.render('messages', {
		title: "Messages to my friends!",
		friend: "Soobin",
	})
	// res.sendFile(path.join(__dirname, '..', 'public', 'images','friends.jpg'));
	// res.send('Nice to meet you!');
}

function postMessage(req, res) {
	console.log('Updating messages');
}

module.exports = {
	getMessages,
	postMessage,
}