import { Router } from 'express';
import upload from './upload.js'
const router = Router();

router.use('/upload', upload);


export default router;
