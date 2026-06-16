const cloudinary = require('cloudinary').v2
const { cloudinaryStorage, CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
    cloud_name: 'dy1ve7sgm',
    api_key: '328317195751591',
    api_secret: '1ZfK1zxvnvJlJmfwkEL1RuFCIFI',
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'gaveta-memorias',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp']
    }
})

const upload = multer({storage: storage})

module.exports = upload