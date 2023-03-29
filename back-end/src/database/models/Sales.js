const SalesModel = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "Sales",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {},
        field: "user_id",
      },

      sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {},
        field: "seller_id",
      },

      totalPrice: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
        field: "total_price",
      },

      deliveryAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "delivery_address",
      },

      deliveryNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "delivery_number",
      },

      saleDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "sale_date",
      },

      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { underscored: true, timestamps: false }
  );

  Sales.associate = ({ User }) => {
    User.hasMany(Sales, { as: 'buyer', foreignKey: 'userId' });
    User.hasMany(Sales, { as: 'seller', foreignKey: 'sellerId' });
   };
  return Sales;
};

module.exports = SalesModel;
