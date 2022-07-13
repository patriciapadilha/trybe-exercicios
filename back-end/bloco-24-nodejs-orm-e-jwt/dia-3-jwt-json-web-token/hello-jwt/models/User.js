const User = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
        timestamps: false,
        tableName: "User"
    });
  
    return User;
};
  
module.exports = User;