const http = require('http');
const fs = require('fs');
let port = 3000;
const server = http.createServer((req, res) => {

	const html = fs.readFileSync('test.html', 'utf8');


	if (req.url === '/') {

		// 301 不再走服务端, from disk cache, 不导致资源存在浏览器缓存中, 要慎重选择
		// 302 还会走服务端
		res.writeHead(301, {
			'Location': '/new'
		});
		res.end();

	}
	if (req.url === '/new') {
		res.writeHead(200, {
			'Content-Type': 'text/html',
		});
		res.end('<div>this is content</div>');
	}
});

server.listen(port, () => {
	console.log(`server is running on ${port}`);
})