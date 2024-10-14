const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));

// Exemple de route
app.get('/', (req, res) => {
  res.send('API en cours d\'exécution');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
