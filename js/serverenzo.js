const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
let pas = 0
let start = 0
let stop = 0
app.use(bodyParser.json());

app.use(cors());

app.get('/', async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send({moteurpas: pas, moteurstop: stop, moteurstart: start});
  } catch (error) {
    res.status(500).send('Une erreur est survenue lors de la vérification du statut du streamer.');
  }
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
  
});


app.post('/update-start', (req, res) => {
  let { moteurstart } = req.body;
  let { moteurstop } = req.body;

  if (moteurstart !== undefined) {
    if (moteurstop == 1){
          return;
    }
    start = moteurstart;
    console.log(`variable ${start}`);
    res.send({moteurpas: pas, moteurstop: stop, moteurstart: start});
  } else {
    res.status(400).send({ success: false, message: 'Invalid input' });
  }
});


app.post('/update-stop', (req, res) => {
  let { moteurstop } = req.body;
  if (moteurstop !== undefined) {
    stop = moteurstop;
    if (moteurstop === 1){
      pas = 0
      start = 0
      stop = 0
    }
    console.log(`variable ${stop}`);
    res.send({moteurpas: pas, moteurstop: stop, moteurstart: start});
  } else {
    res.status(400).send({ success: false, message: 'Invalid input' });
  }
});



app.post('/update-pas', (req, res) => {
  let { moteurpas } = req.body;
  if (moteurpas !== undefined) {
    pas = moteurpas;
    console.log(`variable ${pas}`);
    res.send({moteurpas: pas, moteurstop: stop, moteurstart: start});
  } else {
    res.status(400).send({ success: false, message: 'Invalid input' });
  }
});




