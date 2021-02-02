const express = require("express");
const usersDbHelpers = require('../lib/dbHelpers/usersDbHelpers');
const { app } = require("../server");


function apiRoutes(db) {
  const usersRouter = express.Router();
  const usersRoutes = require("./users");
  usersRoutes(usersRouter, usersDbHelpers, db);
  app.use('/api/users', usersRouter);
}
exports.apiRoutes = apiRoutes;