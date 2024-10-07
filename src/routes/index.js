import { Router } from 'express';
import upload from './crypto.js'
const router = Router();

router.use('/crypto', upload);


export default router;
