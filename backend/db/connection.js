const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

async function main() {
    // await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@microblog-coding-test.7oa1d1h.mongodb.net/?retryWrites=true&w=majority`);
    await mongoose.connect('mongodb://localhost:27017/db_microblog_coding_test')
    console.log('connected')
}

main().catch((err) => console.log(err));

module.exports = mongoose;