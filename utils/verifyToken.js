import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    console.log("Gələn Token:", token); 

    if (!token) {
        return res.status(401).json({ error: "Token yoxdur!" });
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {
            return res.status(403).json({ error: "Token yanlışdır!" });
        }
        req.user = user;
        next();
    });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return res.status(403).json({ error: "Bu səhifəyə girmək üçün icazəniz yoxdur!" });
        }
    });
};


export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return res.status(403).json({ error: "Bu səhifəyə girmək üçün icazəniz yoxdur!" });
        }
    });
};