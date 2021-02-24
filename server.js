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

app.listen(PORT);
