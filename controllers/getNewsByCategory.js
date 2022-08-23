const News = require('../models/news');

const getNewsByCategory = async (req, res, next) => {

    const {category, page, perPage} = req.query; // ?category=image&page=2&perPage=10
    const skip = (page - 1) * perPage;
    try {
        const result = await News.find({category}, {}, {skip, limit: perPage});
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
} 

module.exports = getNewsByCategory;