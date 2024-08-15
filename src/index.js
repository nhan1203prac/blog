const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes/index');
const db = require('./config/db');
const methodOverride = require('method-override');
const sortMiddleware = require('./app/middleware/sortMiddlewares')
// Connect to db
db.connect();
const app = express();
// override ->PUT
app.use(methodOverride('_method'));
const port = 3000;
// chức năng làm midleWare cho form data gửi = submit
app.use(express.urlencoded({ extended: true }));
// chức năng làm midleWare cho fetch axios gửi = code js
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// http logger
app.use(morgan('combined'));
// custom middleware
app.use(sortMiddleware)
// template-engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: require("./helpers/handlebars")
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

// ví dụ middleware
app.get('/middleware',
    function(req,res,next){
        if(['vevip', 'vethuong'].includes(req.query.ve)){
            req.face='gach gach gach!!!'
            return next();
        }
        res.status(403).json({message:'Access denied'})
    },
    
    function(req,res,next){
        res.json({message:'Successfully',face:req.face})
        
    })

