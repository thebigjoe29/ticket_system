const express = require('express');
const session = require('express-session');
const app = express();

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      res.clearCookie('connect.sid');
      return res.status(200).json({ message: 'Logout successful' });
    });
  });


app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});