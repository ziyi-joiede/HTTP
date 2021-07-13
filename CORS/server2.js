const http = require('http');

const server = http.createServer((req, res) => {

	// 服务端跨域设置
	res.writeHead(200, {
		'Access-Control-Allow-Origin': '*'
	});

	res.end('123');
});

server.listen(3002, () => {
	console.log('server is running');
})