let jwt = require('jwt-simple');
let moment = require('moment');
let secret = 'diego';

exports.decodeToken = function(req, res, next) {
    if(!req.headers.authorization){
        return res.status(403).send({message: ' NoHeadersError'})
    }

    let token = req.headers.authorization;
    let segment = token.split('.');

    if(segment.length != 3) {
        return res.status(403).send({message: 'InvalidToken'});
    } else {
        try {
            let payload = jwt.decode(token, secret);
            console.log(payload);
        } catch (error) {
            return res.status(403).send({message: 'ErrorToken'});
        }
    }
}