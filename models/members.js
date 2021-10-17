const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    class: {
        type: Number,
        required: true
    },
    socials: Array,
    pos: { 
        type: Number
    },
    image: String
});

module.exports = mongoose.model("Member", MemberSchema);