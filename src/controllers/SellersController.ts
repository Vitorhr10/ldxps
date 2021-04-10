import { Request, Response } from 'express';

import db from '../database/connection';

interface ClientItem  {
  clnome: string;
  dslim: number;
  idtipo: string
}

export default class SellersController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const clnome = filters.clnome as string;
    const dslim = filters.clnome as string;
    const idtipo = filters.clnome as string;

    if (!filters.clnome || !filters.dslim || !filters.idtipo) {
      return response.status(400).json({
        error: 'Missing filter to search seller'
      })
    }

    const clientes = await db('clientes')
      .where('clientes.clnome', '=', clnome)
      .join('vendedores', 'clientes.vendedores_cdvend', '=', 'clientes.cdcl')
      .select(['clientes.*', 'vendedores.*']);

    return response.json(clientes);

  }

  async create(request: Request, response: Response) {
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
  }
}