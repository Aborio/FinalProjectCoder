import express from 'express';
import { upload } from '../config/multer.js';


const router = express.Router();

router.post('/imagen', upload.single('file'), (req, res, next) => {
    const file = req.file
    if(!file) {
        const error = new Error("porfavor cargue imagen")
        return next(error)
    }
    res.send(file)
})

export default router;