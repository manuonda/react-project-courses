import dotenv from "dotenv"
dotenv.config();

console.log(process.env.MONGO_HOST);

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || "Test",
    MONGO_USER: process.env.MONGO_USER || "admin",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "manu1054",
    MONGO_HOST: process.env.MONGO_HOST || "cluster0.rvi4d.mongodb.net",
    PORT: process.env.PORT || 5000
}