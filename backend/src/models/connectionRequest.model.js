import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class ConnectionRequest extends Model {}

  ConnectionRequest.init(
    {
      sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      receiver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "accepted", "rejected"),
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      modelName: "connection_requests",
    }
  );

  return ConnectionRequest;
};
