const Book = (sequelize, DataTypes) => {
    const BookTable = sequelize.define("Book", {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  
    return BookTable;
  };

  // id não vai no model
  
  module.exports = Book;