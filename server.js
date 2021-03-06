const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);
app.post('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('../db/db.json'))
  const newNote = req.body;
  newNote.id = uuid.v4();
  notes.push(newNote)
  fs.writeFileSync("../db/db.json", JSON.stringify(notes))
}
);



app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
