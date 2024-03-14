const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
const uniqueSurfix = Date.now() + '-' + Math.round(Math.random() + 1e9);
const filename = file.originalname.split('.')[0];
cb(null,filename + '-' + uniqueSurfix + '.png');
    }
})

exports.upload = multer({storage : storage});
