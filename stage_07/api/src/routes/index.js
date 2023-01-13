const { Router } = require("express");

const usersRouter = require("./users.routers.js");

const routes = Router();

routes.use("/users", usersRouter);

module.exports = routes;
