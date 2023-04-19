const jwt = require('jsonwebtoken');
const SECRET_KEY = "sayanisagoodprogrammer";

const fetchuser = (req, res ,next) =>{
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({error : "Plese send a valid Token"})
    }

    try {
        
        const data =jwt.verify(token,SECRET_KEY);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error : "Plese send a valid Token"})
    }


}

module.exports = fetchuser;