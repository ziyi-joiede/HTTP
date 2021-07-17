// CSP:Content-Security-Policy 内容安全策略

// 作用
// 1.限制资源获取
// 2.报告资源获取越权


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

	const html = fs.readFileSync('test.html', 'utf8');

	if (req.url === '/') {
		res.writeHead(200, {
			'Content-Type': 'text/html',
			// 限制加载script 标签中的 js 代码
			//     <script type="text/ecmascript">
			// 			console.log('inline js');
			// 		 </script>
			// 的执行
			// 此时会报错
			// Refused to execute inline script because it violates the following Content Security Policy directive: "default-src http: https:". Either the 'unsafe-inline' keyword, a hash ('sha256-YhLyT6d2a7sscWCIm0AO1GWpkG/MCTDD4+N1ndPrEB0='), or a nonce ('nonce-...') is required to enable inline execution. Note also that 'script-src' was not explicitly set, so 'default-src' is used as a fallback.
			// 'Content-Security-Policy': `default-src http: https:`

			// 限制通过外链加载的 js 脚本,可以通过哪些域名进行加载,如只能加载本域名下的js
			// 图片也不能从外链加载
			// 'Content-Security-Policy': `default-src 'self'`

			// 限制加载制定域名下的 js
			'Content-Security-Policy': 'default-src \'self\' https://cdn.bootcss.com/; report-uri /report'

			// 限制 form 表单的提交
			// 'Content-Security-Policy': 'default-src \'self\'; form-action \'self\''

			// 向服务器发请求汇报
			// 'Content-Security-Policy': 'default-src \'self\'; report-uri /report'

			// 可以加载,但是会向服务器发送 report 的工作
			// 'Content-Security-Policy-Report-Only': 'default-src \'self\' https://cdn.bootcss.com/; report-uri /report'

		});

		res.end(html);

	} else {
		res.writeHead(200, {
			'Content-Type': 'application/javascript'
		});
		res.end('console.log("loaded script")');
	}
});



server.listen(3000, () => {
	console.log('server is running');
})