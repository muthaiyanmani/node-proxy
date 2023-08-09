const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});
const PORT = 80;

const server = http.createServer(function (req, res) {
    const reqDomain = req.headers.host;
    const targetUrl = targetDomain;
   
    console.log(" Target URL :::", targetUrl);
    proxy.web(req, res, { target: targetUrl });
});


server.listen(PORT, () => console.log(`Listening on port :: ${server.address().port}`));