const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Это просто заглушка для сайта. Работу выполнил Волощенко Алексей.');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
