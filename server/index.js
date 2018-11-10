// import project settings
import settings from './settings';

/*
* express import
* handles http requests for nodejs
*/
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import cors from 'cors';
import path from 'path';

// lattes crawler import
import crawlers from './apps/crawlers';
const lattes = crawlers.lattes;

// expresss app instance
const api = express();
api.use('/assets', express.static(path.resolve(__dirname, '../assets')));
api.use('/dist', express.static(path.resolve(__dirname, '../dist')));
api.use(bodyParser.json({'limit': settings.BODY_LIMIT}));
api.server = http.createServer(api);

/*
require routes
passing express app to routes function
*/
import router from './router';
router(api, cors(), { lattes });
// 

// check if there is an environment process value for address and port
api.server.listen(
    process.env.PORT || settings.SERVER_PORT,
    settings.SERVER_ADDRESS,
    () => {
        let HOST = api.server.address().address;
        let PORT = api.server.address().port;
        if (settings.DEBUG) {
            console.log(`Server is running on: http://${HOST}:${PORT}`);
        }
    }
);

export default api;