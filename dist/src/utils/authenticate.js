import { admin } from "../../firebase.js";
export async function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ message: "Missing auth token" });
    const token = authHeader.split(" ")[1];
    try {
        const decoded = await admin.auth().verifyIdToken(token);
        req.uid = decoded.uid;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}
