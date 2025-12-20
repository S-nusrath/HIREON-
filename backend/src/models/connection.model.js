import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Connection extends Model {}

  Connection.init(
    {
      user1_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user2_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "connections",
    }
  );

  return Connection;
};
