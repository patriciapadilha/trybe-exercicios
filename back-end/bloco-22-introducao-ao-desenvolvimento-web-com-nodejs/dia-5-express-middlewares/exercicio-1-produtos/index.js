const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./middlewares/index');

const app = express();
app.use(bodyParser.json());

const sales = [];
  
  app.get('/sales', function (req, res) {
    res.status(200).json(sales);
  });

app.post('/sales',
  middleware.validateProductName,
  middleware.validateInfo,
  middleware.validateSaleDate,
//   middleware.validateWarranty,
  (req, res) => {
    const { productName, infos } = req.body;
    sales.push({ productName, infos });
    res.status(201).json({ message: 'Sale created successfully!' });
  }
);

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
})
