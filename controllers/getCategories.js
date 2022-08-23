const Categories = require('../models/newsCategories')

export const getCategories = async (req, res, next) => {

    try {
        const result = await Categories.find({});
        res.status(200).json(result)
    } catch (error) {
        next(error);
    }
} 