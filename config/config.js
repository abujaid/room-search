const mongoose = require('mongoose')

const DB = "mongodb://localhost:27017/roomi"
async function connectDB() {
    try {
        await mongoose.connect(DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        // Exit process with faliure
        process.exit(1)
    }
}

module.exports = connectDB;