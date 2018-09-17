const app = require('./server.js');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`);
});

module.exports = app;
