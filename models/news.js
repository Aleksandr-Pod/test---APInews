const {Schema, model} = require ('mongoose');

const news = Schema ({
    image: {type: String},
    title: {type: String},
    full_description: {type: String},
    likes_quantity: {type: Number}
})

const News = model('news', news)
module.exports = News;