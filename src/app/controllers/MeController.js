const res = require('express/lib/response');
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    //[Get] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/stored_courses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // Course.countDocumentsDeleted()
        //     .then(function(deletedCount) {

        //     })
        //     .catch(()=>{});

        // Course.find({  })
        //     .then(function (courses) {
        //         res.render('me/stored_courses', {
        //             courses: mutipleMongooseToObject(courses),
        //         });
        //     })
        //     .catch(next);
    }

    //[Get] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({ deleted: true })
            .then(function (courses) {
                res.render('me/trash_courses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
