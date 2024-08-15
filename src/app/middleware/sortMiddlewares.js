module.exports=function sortMiddleware(req,res,next){
    // _sort tên bất kì
    res.locals._sort={
        enable:false,
        type:'default'
    }
    if(req.query.hasOwnProperty('_sort')){
        res.locals._sort.enable=true
        res.locals._sort.type=req.query.type
        res.locals._sort.name = req.query.column
    }
    next()
}