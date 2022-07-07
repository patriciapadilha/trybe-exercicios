const BookService = require('../services/BookService');

const getAll = async (req, res) => {
    const result = await BookService.getAll();
    res.status(200).json(result);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await BookService.getById(id);

    if(!result) return res.status(404).json({ message: 'Book not found'});
    res.status(200).json(result);
};

const create = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const result = await BookService.create({ title, author, pageQuantity });
    res.status(200).json(result);
};

const update = async (req,res) => {
    const { title, author, pageQuantity } = req.body;
    const result = await BookService.update(req.params.id, { title, author, pageQuantity });
    if (!result) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(result);
};

const remove = async (req, res) => {
    const { id } = req.params;

    const result = await BookService.remove(id);

    if (!result) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json({ message: 'Book removed' });
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};