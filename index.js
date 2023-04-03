const express = require('express');
const app = express();
const PORT = 3000;

app.listen(3000, () => console.log(`Listening on port ${PORT}!`))

app.get('/', (req, res) => {
	res.send('Hello!')
})

app.get('/message', (req, res) => {
	res.send('Nice to meet you!')
})

app.post('/message', (req, res) => {
	console.log("Updating message...");
})