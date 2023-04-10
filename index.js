const express = require('express');
const app = express();
const PORT = 3000;

const messagesController = require('./controllers/messages.controller')

const friendsController = require('./controllers/friends.controller')

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

// Logging middleware
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use(express.json());

const friendsRouter = express.Router();

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriendById);
app.use('/friends', friendsRouter);



app.get('/messages', messagesController.getMessages)

app.post('/messages', messagesController.postMessage)