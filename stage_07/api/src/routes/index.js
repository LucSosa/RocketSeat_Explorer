const { Router } = require("express");

const usersRouter = require("./users.routers.js");
const notesRouter = require("./notes.routers.js");
const tagsRouter = require("./tags.routers");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;
