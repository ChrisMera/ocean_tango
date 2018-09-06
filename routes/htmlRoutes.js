// REQUIRES
// ======================================================
// Requiring path to so we can use relative routes to our HTML files
// var path = require("path");
var db = require("../models"); // Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
// REQUIRE END
// ======================================================
// ROUTES
// ======================================================
module.exports = function(app) {
  //===== Load new-project page
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    console.log("HERE");
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.render("index");
  });
  //PULLS BACK THE VIEW FOR SIGNUP.HANDLEBARS PAGE
  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.render("signup");
  });
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.render("login");
  });
  //===== Load dashboard page
  app.get("/dashboard", function(req, res) {
    res.render("dashboard");
  });
  app.get("/add-job", function(req, res) {
    res.render("add-job");
  });
  app.get("/add-ref", function(req, res) {
    res.render("add-ref");
  });
  app.get("/add-edu", function(req, res) {
    res.render("add-edu");
  });
  app.get("/searchjob", function(req, res) {
    res.render("searchjob");
  });
  app.get("/resume", function(req, res) {
    console.log("Req user " + req.user.id);
    var data = {};
    db.User.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function(result) {
      console.log("this is the result " + result);
      data.user = result;
    });
    db.Education.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function(result) {
      data.education = result;
      db.Experience.findAll({
        where: {
          UserId: req.user.id
        }
      }).then(function(result) {
        data.experiences = result;
        db.References.findAll({
          where: {
            UserId: req.user.id
          }
        }).then(function(result) {
          data.references = result;
          res.render("resume", data);
          console.log(data);
        });
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("/objective", function(req, res) {
    res.render("objective");
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.redirect("/dashboard");
  });
  app.get("*", function(req, res) {
    res.render("404");
  });
};
// ROUTES END
// ======================================================
