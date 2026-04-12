import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authrouter from "./api/routes/auth.routes.js";
import organizationRouter from "./api/routes/organization.routes.js";
dotenv.config();
const app = express();

//  middleware:
app.use(express.json());
app.use(cookieParser());

//  routes
app.use("/api/auth", authrouter);
app.use("/api/organization", organizationRouter);

export default app;
