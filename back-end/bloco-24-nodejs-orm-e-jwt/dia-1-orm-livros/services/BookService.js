const { Book } =require('../models');

const getAll = async () => {
    const result = await Book.findAll();

    return result;
};

const getById = async (id) => {
    const result = await Book.findByPk(id);
    
    return result;
};

const create = async ({ title, author, pageQuantity }) => {
    const result = await Book.create({ title, author, pageQuantity });

    return result;
};

const update = async (id, { title, author, pageQuantity }) => {
    const [updated] = await Book.update(
        {
            title,
            author,
            pageQuantity,
        },
        { where: { id } },
    );
    return updated;
};

const remove = async (id) => {
    const removed = await Book.destroy(
      { where: { id } },
    );
  
    return removed;
}; 

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};