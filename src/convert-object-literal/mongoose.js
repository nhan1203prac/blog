module.exports = {
    multipleMongooseObject: (mongooses) =>
        mongooses.map((mongoose) => mongoose.toObject()),
    mongooseObject: (mongoose) => (mongoose ? mongoose.toObject() : mongoose),
};
// multipleMongooseObject = (mongooses)=>mongooses.map(mongoose=>mongoose.toObject())
// mongooseObject =(mongoose)=>mongoose?mongoose.toObject():mongoose
