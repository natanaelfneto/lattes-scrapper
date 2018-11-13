// import settings from '../settings';
import path from 'path'

export default (api, cors, apps) => {

    // api.get('/', (req, res, next) => {
    //     res.header("Access-Control-Allow-Origin", settings.ALLOWED_HOSTS);
    //     res.crossdomain = settings.CROSSDOMAIN_FLAG;
    //     next();
    // });
    
    api.get('/', cors, (req, res, next) => {
        res.sendFile(path.resolve(__dirname, '../../index.html'))
    });
    
    // api.get('/:lattesID', (req, res, next) => {
    //     res.header("Access-Control-Allow-Origin", settings.ALLOWED_HOSTS);
    //     res.crossdomain = settings.CROSSDOMAIN_FLAG;
    //     next();
    // });
    
    // get lattes user id route
    api.get('/api/getUser/:lattesID', cors, (req, res, next) => {
        apps.lattes.getUser(req.params.lattesID)
            .then(data => { 
                res.json(data)
            })
    });
}

