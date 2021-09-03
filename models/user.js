const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        avatar: {
            type: String,
            default: 'https://avatar.cl/default.jpg'
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 18
        },
        email: {
            type: String,
            unique: true,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: {
            createdAt: 'createDate',
            updatedAt: 'updateDate'
        }
    }
);

module.exports = mongoose.model('user', UserScheme);