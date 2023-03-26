const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const Word = require("./models/word");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const errorHandler = (error, request, response, next) => {
    console.error(error.message);
};

app.get("/api/words", (req, res) => {
  Word.find({}).then((words) => {
    res.json(words);
  });
});

app.get("/api/words/:id", (req, res, next) => {
    Word.findById(req.params.id)
        .then(word => {
            if (word) {
                res.json(word);
            } else {
                res.status(404).end();
            }
        })
        .catch(error => next(error));
});

app.post("/api/words", (req, res, next) => {
    const body = req.body;
    if (!body.word || !body.definition || !body.etymology) {
        return res.status(400).json({
            error: "content missing"
        });
    }
    const word = new Word({
        word: body.word,
        definition: body.definition,
        etymology: body.etymology,
    });

    word.save().then(savedWord => {
        res.json(savedWord);
    });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
