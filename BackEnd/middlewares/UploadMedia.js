//Dependencies
const multer= require('multer');
const crypto=require('crypto')
const fs=require('fs');
//Dependencies

//Hashing the imageURL
const hashFunc = (fileName) => {
    const hash = crypto.createHash('md5');
    hash.update(fileName); 
    const md5sum = hash.digest('hex');
    return md5sum;
};
//Hashing the imageURL

//Block Start MiddleWare For handling The Single Image WIth HashFunction.
let UploadProductImage = multer({
    storage: multer.diskStorage({
        destination: (req, next, cb) => {
            let path = `./assets/Product/${req.body.productname}`;
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path, function (err, res) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json('Saved Succefully');
                    }
                });
            }
            cb(null, path);
        },
        filename: (req, file, cb) => {
            const md5sum = hashFunc(file.originalname);
            //originalname is the uploaded file's name with date iso String
            let ext = file.mimetype.split('/')[1];
            // Fix svg+xml bug
            if (ext.includes('svg')) {
                ext = 'svg';
            }

            cb(null, `${Date.now()}_${md5sum}.${ext}`);
        }
    })
});
//Block Ends MiddleWare For handling The Single Image WIth HashFunction.

module.exports = { UploadProductImage };
