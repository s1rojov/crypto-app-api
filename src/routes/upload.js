import express from 'express';
import multer from 'multer';
import xlsx from 'xlsx';
import path from 'path';

const router = express.Router();

// Multer storage va file filter
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Yuklangan fayllarni saqlash uchun papka
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /xlsx|xls/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Only Excel files are allowed!'));
        }
    }
});

// Excel fayl yuklash uchun route
router.post('/', upload.single('excelFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // Excel faylini o'qish
    const filePath = req.file.path;
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Excel faylini JSON formatiga o'tkazish
    const data = xlsx.utils.sheet_to_json(worksheet);

    // Ma'lumotlarni qaytarish
    res.json({ data });
});

export default router;
