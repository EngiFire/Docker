const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Так - это просто заглушка для выполнения задания и не более. Работу выполнил Волощенко Алексей.');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
