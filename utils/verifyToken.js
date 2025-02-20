import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  
       const token = req.cookies.access_token;
       if (!token){
        return res.status(401).json({ error: "Token yoxdur!"});
       } 
       
       jwt.verify(token, process.env.JWT , (err, user) => {
        if (err) 
            return res.status(403).json({ error:"Token yanlisdir!"});
            req.user = user;
            next();
        
       })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            if(err) return res.status(403).json({ error: "Bu sehifeye girmek ucun icazeniz yoxdur!"})
        }
    })
}


export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next()
        }else{
            if(err) return res.status(403).json({ error: "Bu sehifeye girmek ucun icazeniz yoxdur!"})
        }
    })
}