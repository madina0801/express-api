function getFriends(req, res) {
	res.json(friends);
}

function postFriend(req, res) {
	if (!req.body.name) {
		return res.status(400).json({
			error: 'Missing friend name! :('
		})
	}

	const newFriend = {
		name: req.body.name,
		id: friends.length,
	}

	friends.push(newFriend);
	res.json(newFriend);
}

function getFriendById(req, res) {
	const friendId = +req.params.friendId;
	const friend = friends[friendId]

	if(friend) {
		res.json(friend);
	} else {
		res.status(404).json({
			error: 'Friend was not found! :('
		})
	}
}

module.exports = {
	getFriends,
	postFriend,
	getFriendById
}