const {check} = require('express-validator');

exports.youtubeValidator = [
    check('url')
        .isURL()
        .withMessage('Please enter a valid URL')
        .matches(/(youtube.com|youtu.be)/)
        .withMessage('Please enter a valid YouTube URL')
        .trim()
];

