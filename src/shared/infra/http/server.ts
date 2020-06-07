import App from './App';

const server = new App().server;

server.get('/', (req, res) => res.send('Hello, Prisma!'));

server.listen(3333, () => console.log('Server running...'));
