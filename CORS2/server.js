const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

	if (req.url === '/') {
		const html = fs.readFileSync('test.html', 'utf8');

		res.writeHead(200, {
			'Content-Type': 'text/html'
		});

		res.end(html);
	}
});

server.listen(3001, () => {
	console.log('server is running 3001');
})