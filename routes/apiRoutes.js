// REQUIRES
// ======================================================
var db = require("../models");
var passport = require("../config/passport");
// REQUIRE END
// ======================================================

// routes
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
    db.Education.create({
      school: req.body.school,
      degree: req.body.degree,
      startDate: req.body.startDate,
      endDate: req.body.endDate
    }).then(function(dbEdu) {
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
  app.get("/api/exp", function(req, res) {
    db.Experience.findAll({}).then(function(dbExp) {
      res.json(dbExp);
    });
  });
  //create for experience table
  app.post("/api/exp", function(req, res) {
    db.Experience.create({
      name: req.body.school,
      role: req.body.degree,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      skills: req.body.assSkills,
      type: req.body.expType
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
        name: req.body.school,
        role: req.body.degree,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        skills: req.body.assSkills,
        type: req.body.expType
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
  app.put("/api/ref", function(req, res) {
    db.references
      .update(
        {
          name: req.body.name,
          phone: req.body.phone,
          relationship: req.body.relationship
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(function(dbRef) {
        res.json(dbRef);
      });
  });
  // REFERENCES END
  // ======================================================
  // USER
  // ======================================================
  //find all from user table
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");
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
        name: req.user.email,
        id: req.user.id
      });
    }
  });

  // //create for user table
  // app.post("/api/user", function(req, res) {
  //   db.User.create({
  //     name: req.body.name,
  //     address: req.body.address,
  //     phone: req.body.phone,
  //     email: req.body.email,
  //     url: req.body.url
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });
  // //destroy for user table
  // app.delete("/api/user/:id", function(req, res) {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });
  // //update for user table
  // app.put("/api/user", function(req, res) {
  //   db.User.update(
  //     {
  //       name: req.body.name,
  //       address: req.body.address,
  //       phone: req.body.phone,
  //       email: req.body.email,
  //       url: req.body.url
  //     },
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }
  //   ).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });
  //end of .exports
};
