// 数据协商:客户端向服务端发送请求时,客户端声明希望
// 得到的数据格式是什么样子的,以及数据相关的限制,
// 服务端会根据客户端希望的数据格式后做出判断,区分返回什么样的数据

//分类
//客户端:
// Accept: 告诉服务端希望什么样的数据类型
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9

// Accept-Encoding: 希望数据编码方式
// Accept-Encoding: gzip, deflate, br

// Accept-Language: 希望展示的语言
// Accept-Language: zh-CN,zh;q=0.9

// User-Agent: 浏览器的相关信息
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36



// 服务端
// ContentType: 对应客户端的 Accept
// Content-Type: text/html

// Content-Encoding: 实际数据的编码方式
// Content-Language: 实际数据展示的语言

const http = require('http');
const fs = require('fs');
const zlib = require('zlib');


const server = http.createServer((req, res) => {
	const html = fs.readFileSync('index.html');

	res.writeHead(200, {
		'Content-Type': 'text/html',
		// 'X-Content-Type-Options': 'nosniff' // 没有声明返回数据类型时,不会随意预测
		'Content-Encdoing': 'gzip'
	});
	res.end(html);
});
server.listen(3000, () => {
	console.log('server is running on 3000');
})