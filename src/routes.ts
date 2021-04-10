import express from 'express';
import db from './database/connection';

const routes = express.Router();

interface ClientItem  {
  clnome: string;
  dslim: number;
  idtipo: string
}

routes.post('/sellers', async (request, response) => {
  const {
    dsnome,
    cdtab,
    dtnasc,
    cliente,
  } = request.body;

  const insertedSellersIds = await db('vendedores').insert({
    dsnome,
    cdtab,
    dtnasc,
  })

  const vendedores_cdvend = insertedSellersIds[0];

  const clienteDoVendedor = cliente.map((clientItem: ClientItem) => {
    return {
      vendedores_cdvend,
      clnome: clientItem.clnome,
      dslim: clientItem.dslim,
      idtipo: clientItem.idtipo,
    };
  })

  await db('clientes').insert(clienteDoVendedor);

  return response.send();
});

export default routes;