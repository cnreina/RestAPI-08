const express           = require('express');

const APP_CWD           = process.cwd();
const restAPIController = require(APP_CWD + '/controllers/restAPIController');
const router            = express.Router();

// GET /feed/posts
router.get('/professional', restAPIController.getProfessional);

// POST /feed/post
// router.post('/post', restAPIController.createPost);

module.exports = router;
