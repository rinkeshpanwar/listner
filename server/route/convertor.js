const router = require('express').Router();
const { youtubeValidator } = require('../schema/convertor');
const {validationResult} = require('express-validator');
const convertorController = require('../controller/convertor');

router.post('/validate',youtubeValidator, (req, res, next) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }, convertorController.validateYoutubeUrl
);

router.get("/youtubeToMp3/:url", convertorController.youtubeToMp3);

module.exports = router;