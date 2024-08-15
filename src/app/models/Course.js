const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const MongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);

// const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Course = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, require: true },
        level: { type: String },
        slug: { type: String, slug: 'name' },
       
    },
    { timestamps: true },
);

Course.query.sortStable=function(req){
    if(req.query.hasOwnProperty('_sort')){
        const isValidType = ['asc','desc'].includes(req.query.type)
        return this.sort({
            [req.query.column]:isValidType?req.query.type:'asc'
        });
       
    }
    return this
}
Course.plugin(MongooseDelete,{
     deletedAt : true ,
     overrideMethods: true })

// overrideMethods để hiển thị những column chưa xóa (only not deleted documents)
module.exports = mongoose.model('Course', Course);
