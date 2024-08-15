const Course = require('../models/Course');
const {
    multipleMongooseObject,
} = require('../../convert-object-literal/mongoose');
class SiteControllers {
    // [GET] /news
    async index(req, res) {
        try {
            const data = await Course.find({});
            res.render('home', {
                data: multipleMongooseObject(data),
            });
            // console.log(data)
        } catch (err) {
            res.status(400).json({ error: 'errol' });
        }
        // res.render('home');
    }
    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
    formal(req, res) {
        res.send(' ');
    }
}
module.exports = new SiteControllers();
