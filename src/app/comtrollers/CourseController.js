const Course = require('../models/Course');
const { mongooseObject } = require('../../convert-object-literal/mongoose');
class CourseControllers {
    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slugss })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseObject(course),
                }),
            )
            .catch(next);
    }
    create(req, res, next) {
        res.render('courses/create');
    }
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseObject(course),
                }),
            )
            .catch(next);
    }
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    destroy(req, res, next){
        Course.delete({_id : req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }
    restored(req,res,next){
        Course.restore({_id : req.params.id})
        .then(()=>res.redirect('back'))
        
        .catch(next)
    }
    
    force(req,res,next){
        Course.deleteOne({_id : req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }
    handleFormAction(req,res,next){
        
        switch(req.body.action){
            case 'deleted':
                Course.delete({_id : {$in:req.body.courseIds}})
                .then(()=>res.redirect('back'))
                .catch(next)
        }
    }
}
module.exports = new CourseControllers();
