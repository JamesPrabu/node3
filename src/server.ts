import express from 'express';

const server = express();

server.get('/', (req, res)=> {
    res.send('Hello World!!!!');
    });
    
server.listen(3600, () => {
	console.log('server is nunning');
});