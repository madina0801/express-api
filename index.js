const express = require('express');
const app = express();
const friendsRouter = require('./routes/friends.router');

const PORT = 3000;

const messagesController = require('./controllers/messages.controller')

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

// Logging middleware
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use(express.json());


app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);