const router = require('express').Router();
const notesRouter = require('./notes');

//handling any request made to /api/notes
router.use('/notes', notesRouter);

module.exports = router;