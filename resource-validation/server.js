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
		const etag = req.headers['if-none-match'];
		if (etag === '777') {
			res.writeHead(304, {
				'Content-Type': 'text/javascript',
				// 'Cache-Control': 'max-age=2000000,no-cache',
				'Cache-Control': 'max-age=2000000,no-store',
				'Last-Modified': '123',
				'Etag': '777'
			});
			// res.end('');
			res.end('new content');
		} else {
			res.writeHead(200, {
				'Content-Type': 'text/javascript',
				// 'Cache-Control': 'max-age=2000000,no-cache',
				'Cache-Control': 'max-age=2000000,no-store',
				'Last-Modified': '123',
				'Etag': '777'
			})
			res.end('console.log("script loaded twice")');
		}
	}
});

server.listen(3000, () => {
	console.log('server is running');
})