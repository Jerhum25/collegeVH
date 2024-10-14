const User = require('./models/User');

// Créer un utilisateur
app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
