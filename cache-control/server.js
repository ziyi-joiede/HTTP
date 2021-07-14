const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

	if (req.url === '/') {
		const html = fs.readFileSync('index.html', 'utf8');

		res.writeHead(200, {
			'Content-Type': 'text/html'
		});

		res.end(html);
	}

	if (req.url === '/script.js') {
		res.writeHead(200, {
			'Content-Type': 'text/javascript',
			'Cache-Control': 'max-age=10,public'
		});

		res.end('console.log("script loaded twice")');

	}
});

server.listen(3000, () => {
	console.log('server is running');
})