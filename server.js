import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const PORT = 5000;

const palindromes = [
  'racecar',
  'd',
  'cccc',
  'aba',
  'abba',
  'mom',
];

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/palindromes', (req, res) => {
  res.set('Cache-control', 'no-cache');
  res.send(palindromes);
});

app.post('/api/palindromes', (req, res) => {
  res.set('Cache-control', 'no-cache');
  for (let elem of palindromes) {
    if ((typeof elem === 'string' && elem === req.body.val) || elem.val === req.body.val) {
      return res.status(400).send(`The palindrome '${req.body.val}' already exists.`)
    }
  }
  palindromes.push({val :req.body.val, time:req.body.time});
  res.send(palindromes);
})


app.listen(PORT);
