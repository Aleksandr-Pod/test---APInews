const OneStory = require('../models/oneStory');

const getCategories = async (req, res, next) => {
    const data = req.query.filter(query => query !== undefined );
    try {
        const result = await OneStory.findOne(data);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
module.exports = getCategories;