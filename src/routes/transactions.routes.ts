import { Router } from 'express';
import multer from 'multer';

import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ImportTransactionsService from '../services/ImportTransactionsService';

import uploadConfig from '../config/upload';

const upload = multer(uploadConfig);

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  try {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const transactions = await transactionsRepository.find();
    const balance = await transactionsRepository.getBalance();

    return response.json({ transactions, balance });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionsRouter.post('/', async (request, response) => {
  try {
    const { title, value, type, category } = request.body;
    const createService = new CreateTransactionService();
    const transaction = await createService.execute({
      title,
      value,
      type,
      category,
    });

    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ message: err.message, status: 'error' });
  }
});

transactionsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  try {
    const deleteTransaction = new DeleteTransactionService();
    await deleteTransaction.execute(id);
    return response.status(204).send();
  } catch (err) {
    return response.status(400).json({ message: err.message, status: 'error' });
  }
});

transactionsRouter.post(
  '/import',
  upload.single('file'),
  async (request, response) => {
    const importTransactions = new ImportTransactionsService();
    const transactions = await importTransactions.execute(request.file.path);

    return response.json(transactions);
  },
);

export default transactionsRouter;
