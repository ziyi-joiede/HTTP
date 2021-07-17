const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

	const html = fs.readFileSync('test.html', 'utf8');
	const img = fs.readFileSync('test.jpg');

	// connetion 每个请求都会用一个 tcp 连接
	// chrome 浏览器的 network 的 Connetion ID 相同代表同一个 tcp 连接
	if (req.url === '/') {
		res.writeHead(200, {
			'Content-Type': 'text/html',
			'Connection': 'close'
		});
		res.end(html);
	} else {
		res.writeHead(200, {
			'Content-Type': 'image/jpg',
			'Connection': 'close'
		});
		res.end(img);
	}

});



server.listen(3000, () => {
	console.log('server is running');
})