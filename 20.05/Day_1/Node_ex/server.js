const http = require('http'),
fs = require('fs');
http.createServer(function (req, res) {
fs.readFile('index.html', 'utf8', function (err, data) {
if (err) {
res.writeHead(404, {
'Content-Type': 'text/html'
});
res.end('Erorr load index.html');
} else {
res.writeHead(200, {
'Content-Type': 'text/html'
});
res.end(data);
}
})
}).listen(8081);
console.log('HTTP server running on port 8081');