import express, { response } from 'express';

const app = express();

app.use(express.json());

const sellers = [
  'Landix',
  'Vitor'
]

app.get('/sellers', (request, response) => {
  const search = String(request.query.search);

  const filteredSellers = search ? sellers.filter(seller => seller.includes(search)) : sellers;

  return response.json(filteredSellers);
});

app.get('/sellers/:id', (resquest, response) => {
  const id = Number(resquest.params.id);

  const seller = sellers[id];

  return response.json(seller);
})

app.post('/sellers', (request, response) => {
  const data = request.body;

  console.log(data);

  const seller = {
    name: data.name,
    email: data.email
  };

  return response.json(seller);
})

app.listen(3333);
