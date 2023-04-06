const express = require('express');
const app = express();
const PORT = 3000;

const friends = [
	{
		id: 0,
		name: "Jay",
	},
	{
		id: 1,
		name: "Jake",
	},
	{
		id: 2,
		name: "Mark",
	},
];

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

// Logging middleware
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use(express.json())

app.post('/friends', (req, res) => {
	if(!req.body.name) {
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
})

app.get('/friends', (req, res) => {
	res.json(friends);
})

app.get('/friends/:friendId', (req, res) => {
	const friendId = +req.params.friendId;
	const friend = friends[friendId]

	if(friend) {
		res.json(friend);
	} else {
		res.status(404).json({
			error: 'Friend was not found! :('
		})
	}
})

app.get('/message', (req, res) => {
	res.send('Nice to meet you!')
})

app.post('/message', (req, res) => {
	console.log("Updating message...");
})