const jwt =require('jsonwebtoken')
module.exports = (req , res,next)=>{
    const token= req.header('Authorization')
    if(!token) return res.status(401).send('Acssess Denied')
    try {
        const validToken = jwt.verify(token , process.env.TOKEN_SECRET)
        req.user=validToken
        next()
    } catch (error) {
        res.status(400).send('Invalid Token')
        
    }
}