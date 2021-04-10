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

  const trx = await db.transaction();

  try {
    const insertedSellersIds = await trx('vendedores').insert({
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
  
    await trx('clientes').insert(clienteDoVendedor);
  
    await trx.commit();
  
    return response.status(201).send();
  } catch (error) {
    await trx.rollback();

    return response.status(400).json({
      error: 'Unexpected error while creating new Seller'   
    })
  }
});

export default routes;