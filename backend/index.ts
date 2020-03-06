import Server from './classes/server';
import cors from 'cors';
import bodyParser from 'body-parser';

import providerClass from './routes/provider';
const server = Server.instance;

const allowedOrigins = [
  '*'
];

server.app.use(bodyParser.urlencoded({ extended: false }));
server.app.use(bodyParser.json());

server.app.use(cors({origin:"*"}))

server.app.use('/api/provider', providerClass);

server.start(() => {
    console.log(`Test BackEnd listening on port: ${server.port}`);
  });


  