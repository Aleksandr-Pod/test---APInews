const { Schema, model } = require('mongoose');

const categories = Schema ({
    name: {type: String, required: [true, 'category name required']}
})

const Categories = model('newsCategories', categories);
module.export = Categories;