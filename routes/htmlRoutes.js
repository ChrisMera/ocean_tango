// PASSPORT ROUTES
// =============================================
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  //===== Load new-project page
  app.get("/new-job", function(req, res) {
    res.render("new-job");
  });

  //===== Load dashboard page
  app.get("/dashboard", function(req, res) {
    res.render("dashboard");
  });
  // Render 404 page for any unmatched routes

  app.get("/", function(req, res) {

    // If the user already has an account send them to the members page
    console.log("HERE");
    if (req.user) {
      res.redirect("/members");
    }
    res.render("index");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });

  app.get("/objective", function(req, res) {
    res.render("objective");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.redirect("/dashboard")
  });
    
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// PASSPORT ROUTES
// =============================================

// PASSPORT ROUTES END
// =============================================
