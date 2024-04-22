const notes = require('express').Router();

// destructure the function from fsUtils file
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

const uuid = require('../helpers/uuid');

notes.get('/', (req, res) => {
    console.log(`${req.method} request received for notes`);
    readFromFile('./db/db.json')
        .then((data) => res.json(JSON.parse(data)));
})

//post method for a new note
notes.post('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    console.log(req.body);

    const { title, text } = req.body;

    // logic to make sure no key is undefined or null
    if (title && text) {
        // a new object is created with the following keys
        const newNote = {
            title,
            text,
            id: uuid(),
        }

        // new note appended to the read file
        readAndAppend(newNote, './db/db.json');
        res.json(newNote);
    } else {
        res.send('Error: Invalid Note. Note must include title and text');
    }
})

// a delete request using the note id
notes.delete('/:id', (req, res)=>{
    //capture the id
    const noteID = req.params.id;

    readFromFile('./db/db.json')
    .then((data) => {
        const parsedData = JSON.parse(data);
        const newNotes = parsedData.filter((note)=>{
            return note.id !== noteID;
        });
        return newNotes;
    })
    .then((newNotes)=>{
        writeToFile('./db/db.json', newNotes);
        res.json(newNotes);
    });
    return;

});

module.exports=notes;