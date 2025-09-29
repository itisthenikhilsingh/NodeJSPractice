const express = require('express');
const router = express.Router();


router.get('/stud/:username', (req, res) => {
  const username = req.params.username;
  if (username) {
    res.send(`Profile of ${username}`);
  } else {
    res.send('Profile page (no username provided)');
  }
});

router.get('/prof/:username', (req, res) => {
  const username = req.params.username;
  if (username) {
    res.send(`Profile of ${username}`);
  } else {
    res.send('Profile page (no username provided)');
  }
});

router.get('/emp/:username', (req, res) => {
  const username = req.params.username;
  if (username) {
    res.send(`Profile of ${username}`);
  } else {
    res.send('Profile page (no username provided)');
  }
});


router.post('/stud/:username', (req, res) => {
  const username = req.params.username;
  if (username) {
    res.send(`Welcome to this page, ${username}`);
  } else {
    res.send('Profile page (no username provided)');
  }
});

router.post('/prof/:username', (req, res) => {
  const username = req.params.username;
  if (username) {
    res.send(`Welcome to this page, ${username}`);
  } else {
    res.send('Profile page (no username provided)');
  }
});

router.post('/emp/:username', (req, res) => {
  const username = req.params.username;
  if (username) {
    res.send(`Welcome to this page, ${username}`);
  } else {
    res.send('Profile page (no username provided)');
  }
});

module.exports = router;
