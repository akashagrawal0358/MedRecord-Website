const jwt = require('jsonwebtoken');



module.exports = async (req, res, next) => {
    try {
        // from frontend --> Bearer is at 0th and token is at 1st   
        // const token = req.headers["authorization"].split(" ")[1];

       const token = req.headers.authorization.split(" ")[1];

        // JWT_SECRET is used now for decrypt 
        await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

            if (err) {
                // err --> like token expire, token malware
                return res.status(401).send({ msg: "Auth failed", success: false });
            }
            else {
                // {id : Patient._id}
                req.body.patientId = decoded.id;
                next();
            }
        })
    }
    catch (error) {
        console.log(error);
        return res.status(401).send({ msg: "Auth failed", success: false });
    }
} 