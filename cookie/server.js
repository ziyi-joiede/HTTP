const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

	const host = req.headers.host;

	if (req.url === '/') {
		const html = fs.readFileSync('test.html', 'utf8');
		// 在响应头设置 cookie
		// res.writeHead(200, {
		// 	'Content-Type': 'text/html',
		// 	'Set-Cookie': 'id=123'
		// });

		// 设置多个 cookie,
		// max-age: cookie 的过期时间
		// httpOnly: 禁止 javascript 访问 cookie
		// domain: coookie有访问域权限的设定的，一般当前域写了 cookie，其他域不能访问
		// 例如：	在 a.com 网站下写一个 cookie，此cookie只能在 a.com 下被访问，在 b.com 是不能访问的
		//  通过设置可以使同一个域名下的二级域名test.a.comn能够访问 a.com 的 cookie

		res.writeHead(200, {
			'Content-Type': 'text/html',
			'Set-Cookie': ['id=123;max-age=2', 'abc=456;httpOnly']
		});

		res.end(html);
	}

});



server.listen(3000, () => {
	console.log('server is running');
})