import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import moment from "moment";

const PORT = 5000;

const palindromes = [
  {item: 'racecar', date: null},
  {item: 'd', date: null},
  {item: 'cccc', date: null},
  {item: 'aba', date: null},
  {item: 'abba', date: null},
  {item: 'mom', date: null},
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
  let addDate = moment().format("MMM Do YY");
  let data = req.body.data

  if (palindromes.includes(data)) {
    return res.status(500)
      .send({
        error: 'That palindrome already exists'
      })
  } else {
    palindromes.push({item: data, date: addDate});
    res.status(200)
    .send(palindromes);
    // .send({result: 'OK'});
  }
});


app.listen(PORT);
