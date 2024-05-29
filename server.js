const http = require('http');
const url = require('url');
const querystring = require('querystring');

function onRequest(req, res) {
    if (req.method === 'GET') {
        const parsedUrl = url.parse(req.url);
        const query = parsedUrl.query;
        const parsedQuery = querystring.parse(query);
        const password = parsedQuery.password;

        if (password === 'KONGU') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Logged in successfully');
            console.log('Logged in successfully');
        } else {
            res.writeHead(401, { 'Content-Type': 'text/plain' });
            res.write('Password incorrect');
            console.log('Password incorrect');
        }
        res.end();
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.write('Method Not Allowed');
        res.end();
    }
}

http.createServer(onRequest).listen(8080, () => {
    console.log('Server is started...');
});
