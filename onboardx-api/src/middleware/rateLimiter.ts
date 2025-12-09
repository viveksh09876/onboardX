import rateLimit from "express-rate-limit";

//global rate limit for all requests e.g 100 requests per 15 min per IP
export const globalRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { message: "Too many requests. Please try again later" },
    standardHeaders: true,
    legacyHeaders: false
});

//stricter rate limit for login routes
export const loginRateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5,
    message: { message: "Too many requests. Please try again later" },
    standardHeaders: true,
    legacyHeaders: false
});