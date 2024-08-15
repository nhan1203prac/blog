// nodemon dùng để reload khi sửa code tránh chạy lại
// lúc đầu chạy: node index.js =>  "start": "nodemon --inspect src/index.js", npm start
// ngoài ra còn cung cấp flag là inspect (dấu node trong f12)  khi web lỗi thì nó hiển thị code đang chạy như thế nào và giá trị từng biến

const CourseController = require('./app/comtrollers/CourseController');

// morgan để log các hoạt động request response

// express handlebars tạo layout bth khi viết code vào
// app.get('/', (req, res) => {
//     res.send('hello world')
//   })  khi code nhiều thì sẽ rất  rối nên ta dùng template engine

// cài đặt node-sass sau đó đi cấu hình
// "watch":"node-sass --watch src/resources/scss/ --output src/public/css/",
// khi chạy file .scss bằng npm run watch thì nó sẽ build 1 file .css nhưng mỗi khi thay đổi file .scss thì
// phải npm run watch lại (cách khắc phục là --watch như trên nó sẽ xem sự thay đổi của .scss)

// GET
// cách dùng querry parameter
// cú pháp localhost:3000/search?q=...&author...&al=...
// query string parameter
// khi trong input có name:"q" thì nó sẽ hiện là q: [tên mà ta submit vd:tk mk]
// cách hành vi mặc định của form submit : <form method="GET or POST" action="/news"></form>
// action là nơi diễn ra hành động

// POST
// post không dùng query parameter mà nó dùng body để truy cập
// form data
// urlencoded và json la middleware
// express có dc phương thức urlencoded và json là vì nó dc tích hợp body-parse npm
// mà bản thân body-parse lại sử dụng qs(queryString) để chuyển đổi ví dụ q=vtn --> q:vtn nên req.body mới có thể đọc dc dữ liệu

// prettier  lint-staged  husky
// tạo 1 script trong packagejson
// "beautiful":"prettier --single-quote --trailing-comma all --write 'src/**/*.{js,json,scss}' ",
// trong đó các --single-quote là các flag chức năng
// *lint-staged
// dạng:
// "lint-staged": {
//     "src/**/*.{js,json,scss}": "prettier --single-quote --trailing-comma all --write"
//   },
//   khi đó script beautiful sẽ khác "beautiful":"lint-staged"
// công dụng :format những file đã lưu vào git
// npm run beautiful để chạy
// *husky
// công dụng: k cần chạy thủ công nữa mà mỗi khi add git thì file sẽ tự prettier
// dạng:
// "husky":{
//     "hook":{
//         "pre-commit":"lint-staged"
//     }
// }
// lúc này ta có thể xóa beatiful đi

// tạo các trang theo link (server side rendering)
// lúc đầu ở trang home ta có thẻ a với đường link .../course/html-CSS thì khi chạy nó sẽ thêm link đó
// mặt khác route/course có router.get('/:slugss', courseControllers.show);  :slugss tuongje trưng cho cả cụm sau course trong .../course/html-CSS
// mặt khác trong file  CourseController ta có req.params.slugss dùng để đọc cái slugss đó trong /:slugss và xem nó trùng vs cái nào trong mongoosedb và nó trả lại
// Course.findOne({slug:req.params.slugss})
//   .then(course=>res.render('courses/show',{
//     course:mongooseObject(course)
//     là 1 cách tìm dữ liệu
// học trên handlebarsjs và mongoosejs
