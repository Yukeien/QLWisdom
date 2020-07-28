import { DataTypes, Model } from 'sequelize';

export class Experience extends Model {};

export const initExperienceModel = (database) => {
    Experience.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateBegin: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        dateEnd: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        tableName: "Experiences",
        sequelize: database
    });
};