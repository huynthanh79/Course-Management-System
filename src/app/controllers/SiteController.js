const res = require('express/lib/response');
const Course = require('../models/Course');
//const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[Get] /home
    home(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => {
                res.render('home', {
                    courses: courses, //: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[Get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
