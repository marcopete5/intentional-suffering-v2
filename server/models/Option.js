const mongoose = require('mongoose')
const Schema = mongoose.Schema

const optionSchema = new Schema({
    "challenge": {
        type: String,
        required: true
    },
    "success": Boolean,
    "timeAssigned": Number,
    "datesCompleted": Array,
    "challengeLength": Number,
    "current": Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Option", optionSchema)