import Admin from "../models/Admin.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
}, async (jwt_payload, done) => {
    try {
        console.log("[SYSTEM]: Passport Authentication in Process...");
        let user = await Admin.findOne({ _id: jwt_payload._id });
        console.log("[SYSTEM]: Admin Authentication Success...");
        console.log("[SYSTEM]: Admin ->", user.name);
        delete user.password;
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}))