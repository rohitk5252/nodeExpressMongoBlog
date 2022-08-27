const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;
//  Creating a schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
},{ timestamps: true });

// create a Model based on above schema
// first param = the collection we created in our Database in Mongodb(pluaral there , sigular here[blogs<->Blog]) , second= schema
const Blog = mongoose.model('Blog',blogSchema);

// Export the Model
module.exports = Blog;