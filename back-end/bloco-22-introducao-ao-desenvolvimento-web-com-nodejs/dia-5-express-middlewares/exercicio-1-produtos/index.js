const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./middlewares/index');

const app = express();
app.use(bodyParser.json());

app.post('/sales',
  middleware.validateProductName,
  middleware.validateInfo,
  middleware.validateSaleDate,
//   middleware.validateWarranty,
  (req, res) => res.status(201).json({ message: 'Sale created successfully!' })
);

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
})
