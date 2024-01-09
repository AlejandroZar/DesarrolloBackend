const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const GitHubStrategy = require('passport-github').Strategy;

const loginController = require("../controllers/AuthController");

// Configurar Passport para autenticación local
passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
}));

passport.use(new GitHubStrategy({
  clientID: 'tu-client-id',
  clientSecret: 'tu-client-secret',
  callbackURL: 'http://localhost:3000/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {;
}));

// Serializar y deserializar usuarios
passport.serializeUser((user, done) => {
  done(null, user.id);
});


// Middleware para verificar si el usuario está autenticado
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// Rutas
router.get("/", loginController.mostrar);

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
}));

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback',
  passport.authenticate('github', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  })
);

module.exports = router;
