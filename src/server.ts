import express from 'express';

const app = express();

app.get('/seller', (request, response) => {
  console.log('Listagem de vendedores Landix');

  response.json([
    'Landix',
  ])
});

app.listen(3333);
