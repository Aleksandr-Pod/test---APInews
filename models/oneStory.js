const {Schema, model} = require ('mongoose');

const oneStory = Schema ({
    image: {type: String},
    title: {type: String},
    full_description: {type: String},
    likes_quantity: {type: Number}
})

const OneStory = model('oneStory', oneStory)
module.exports = OneStory;
