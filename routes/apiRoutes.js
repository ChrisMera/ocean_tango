// REQUIRES
// ======================================================
var db = require("../models");
var passport = require("../config/passport");
var activeID;
// REQUIRE END
// ======================================================

// ROUTES
// ======================================================
module.exports = function(app) {
  // EDUCATION
  // ======================================================
  //find all from education table
  app.get("/api/edu", function(req, res) {
    db.Education.findAll({}).then(function(dbEdu) {
      res.json(dbEdu);
    });
  });
  //create for education table
  app.post("/api/edu", function(req, res) {
    console.log("This is the user " + JSON.stringify(req.user));
    db.Education.create(
      {
        UserId: activeID,
        school: req.body.school,
        degree: req.body.degree,
        startDate: req.body.startDate,
        endDate: req.body.endDate
      },
      {
        include: [db.User]
      }
    ).then(function(dbEdu) {
      res.json(dbEdu);
    });
  });
  //destroy for education table
  app.delete("/api/edu/:id", function(req, res) {
    db.Education.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEdu) {
      res.json(dbEdu);
    });
  });
  //update for education table
  app.put("/api/edu", function(req, res) {
    db.Education.update(
      {
        UserId: activeID,
        school: req.body.school,
        degree: req.body.degree,
        startDate: req.body.startDate,
        endDate: req.body.endDate
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbEdu) {
      res.json(dbEdu);
    });
  });
  // EDUCATION END
  // ======================================================
  // EXPERIENCE
  // ======================================================
  //find all from experience table

  //THIS IS WHAT YOU ARE WORKING ON JESSICA
  //========================================
  app.get("/api/searchjob/:asscSkills", function(req, res) {
    db.Experience.findAll({
      where: {
        asscSkills: req.params.asscSkills,
        include: [db.User]
      }
    }).then(function(dbExp) {
      console.log(dbExp);
      res.json(dbExp);
    });
  });
  //RETURNING DATA FROM EXPERIENCE TABLE IN DB
  app.get("/api/searchedu", function(req, res) {
    db.Education.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function(dbEdu) {
      res.json(dbEdu);
    });
  });

  app.get("/api/searchref/:id", function(req, res) {
    //for user specific data
    db.References.findAll({
      where: {
        UserId: activeID
      }
    }).then(function(dbRef) {
      res.json(dbRef);
    });
  });
  //==========================================

  //create for experience table
  app.post("/api/exp", function(req, res) {
    console.log("this is activeID " + activeID);
    db.Experience.create({
      name: req.body.name,
      UserId: activeID,
      role: req.body.role,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      asscSkills: req.body.asscSkills,
      expType: req.body.expType
    }).then(function(dbExp) {
      res.json(dbExp);
    });
  });
  //destroy for experience table
  app.delete("/api/exp/:id", function(req, res) {
    db.Experience.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExp) {
      res.json(dbExp);
    });
  });
  //update for experience table
  app.put("/api/exp", function(req, res) {
    db.Experience.update(
      {
        name: req.body.name,
        UserId: activeID,
        role: req.body.role,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        asscSkills: req.body.asscSkills,
        expType: req.body.expType
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbExp) {
      res.json(dbExp);
    });
  });
  // EXPERIENCE END
  // ======================================================
  // REFERENCES
  // ======================================================
  //for references model
  //find all from references table
  app.get("/api/ref", function(req, res) {
    db.References.findAll({}).then(function(dbRef) {
      res.json(dbRef);
    });
  });
  //create for references table
  app.post("/api/ref", function(req, res) {
    db.References.create({
      name: req.body.name,
      phone: req.body.phone,
      relationship: req.body.relationship
    }).then(function(dbRef) {
      res.json(dbRef);
    });
  });
  //destroy for references table
  app.delete("/api/ref/:id", function(req, res) {
    db.References.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRef) {
      res.json(dbRef);
    });
  });
  //update for references table
  // p.put("/api/ref", function(req, res) {
  //   references
  //   .update(
  //     {
  //       name: req.body.name,
  //       phone: req.body.phone,
  //       relationship: req.body.relationship
  //     },
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }
  //   )
  //   .then(function(dbRef) {
  //     res.json(dbRef);
  //   });
  // });
  // REFERENCES END
  // ======================================================
  // USER
  // ======================================================
  //find all from user table
  app.get("/api/user", function(req, res) {
    db.User.findOne({}).then(function(dbUser) {
      console.log("THIS IS THE DBUSER" + dbUser);
      // Making the variable activeID come from the users id in db
      activeID = dbUser.id;
      console.log("here is active id " + activeID);
      res.json(dbUser);
    });
  });
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    var user = req.user;
    console.log("The User " + user);
    db.User.findOne({
      where: {
        id: user.id
      }
    }).then(function(dbUser) {
      activeID = dbUser.id;
      console.log("here is active id" + activeID);
      res.json("/dashboard");
    });
  });

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      phone: req.body.phone,
      url: req.body.url
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.user.name,
        id: req.user.id
      });
      console.log("Data Name from API " + req.user.name);
    }
  });
};
