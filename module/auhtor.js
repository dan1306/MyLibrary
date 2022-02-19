const mongoose = require("mongoose")

// const authorSchema = {
//     name: {
//         type: String,
//         required: true
//     }
// }

// const Author = mongoose.model("Author", authorSchema)

const authorSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Author", authorSchema)