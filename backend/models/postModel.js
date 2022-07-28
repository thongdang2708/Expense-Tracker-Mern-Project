
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Post", PostSchema);