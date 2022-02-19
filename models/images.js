const { request } = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const db = require('../database/db')
const User = require('./user')

const Images = db.define('Images', {
    imageId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
    {
        freezeTableName: true,
    })

Images.hasOne(User)

module.exports = Images