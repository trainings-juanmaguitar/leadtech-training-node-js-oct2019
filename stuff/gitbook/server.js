const path = require("path");
const nconf = require("nconf");
const Express = require("express");
const compression = require("compression");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const Auth0Strategy = require("passport-auth0");

// Initialize configuration.
require("dotenv").config();

const {
  SESSION_SECRET,
  AUTH0_DOMAIN,
  AUTH0_CONNECTION,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
} = process.env;

// Initialize authentication.
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
passport.use(
  new Auth0Strategy(
    {
      domain: AUTH0_DOMAIN,
      clientID: AUTH0_CLIENT_ID,
      clientSecret: AUTH0_CLIENT_SECRET,
      callbackURL: "/login/callback",
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    }
  )
);

// Initialize the app.
const app = new Express();
app.use(cookieParser());
app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 3600000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());

// Authentication endpoints.
app.get(
  "/login",
  passport.authenticate("auth0", { connection: AUTH0_CONNECTION }),
  function(req, res) {}
);
app.get("/login/callback", passport.authenticate("auth0"), function(req, res) {
  res.redirect("/");
});
app.get("/logout", function(req, res) {
  req.session.destroy();
  req.logout();
  res.redirect("/");
});

// Force authentication for the next routes.
app.use(function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
});

// Host the book.
app.use(Express.static(path.join(__dirname, "./content/_book")));

// Start the server.
const port = process.env.PORT || 4001;
app.listen(port, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Listening on http://localhost:" + port);
  }
});
