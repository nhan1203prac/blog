const Course = require('../models/Course');
const {
    multipleMongooseObject,
} = require('../../convert-object-literal/mongoose');
class MeControllers {
    // [GET] me/storedStoreCoursess
     storedCourses(req, res, next) {
        
        Promise.all([Course.find({}).sortStable(req), Course.countDocumentsDeleted()])
            .then(([courses,deleted]) =>{
                res.render('me/stored-courses', {
                    courses: multipleMongooseObject(courses),deleted
                })
            })
            .catch(next)
        // Course.find({})
        //     .then((courses) =>
        //         res.render('me/stored-courses', {
        //             courses: multipleMongooseObject(courses),
        //         }),
        //     )
        //     .catch(next);
    }
    trashCourses(req,res,next){
        Course.findDeleted({})
        .then(courses=>res.render('me/trash-courses',{
            courses: multipleMongooseObject(courses),
        }))
        .catch(next)
    }
}
module.exports = new MeControllers();
