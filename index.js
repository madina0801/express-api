const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const friendsRouter = require('./routes/friends.router.js');
const messagesRouter = require('./routes/messages.router.js');

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

// Logging middleware
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
	res.render('index', {
		title: 'My Friends Are Very Famous',
		caption: 'Let\'s travel!',
	})
});

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);