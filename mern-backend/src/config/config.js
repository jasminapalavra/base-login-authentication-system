require("dotenv").config();

const config = {
  port: process.env.PORT || 4400,
  secret: process.env.JWT_SECRET || "paragonfullstackmistral",
  mongo: process.env.MONGO || "mongodb://localhost:27017/mern-base",
};
export default config;
