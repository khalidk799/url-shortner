const moongoose = require('mongoose');
const Schema = moongoose.Schema;


const ShortUrlSchema = new Schema({
    url:{
        type: String,
        required: true
    },
    shortId:{
        type: String,
        required: true
    }
});

const ShortUrl = moongoose.model('ShortUrl', ShortUrlSchema);

module.exports = ShortUrl;