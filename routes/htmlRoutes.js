// var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load login page
  app.get("/login", function(req, res) {
    res.render("login");
  });

  //===== Load new-project page
  app.get("/new-job", function(req, res) {
    res.render("new-job");
  });

  //===== Load dashboard page
  app.get("/dashboard", function(req, res) {
    res.render("dashboard");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
