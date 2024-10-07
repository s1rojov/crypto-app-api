import express from 'express';

const router = express.Router();


// get all
router.get('/all',async(req, res) => {
    try {
        const allCrypto = await pool.query('select * from crypto')
        res.status(200).json(allCrypto.rows)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


//upload
router.post('/upload', async(req,res)=>{
    try {
        const excelData = req.body
        for(const item of excelData){
            await pool.query(
                `insert into crypto (fullname, shortname, status, description) values ($1, $2, $3, $4) returning *`,
                [item.Nomi, item.Belgisi, item.Joizmi, item.Maqsadi]
            );
        }
        res.status(201).json('Muvaffaqqiyatli saqlandi!');
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// update
router.patch('/:id', async (req, res) => {
    const { Nomi, Belgisi, Joizmi, Maqsadi } = req.body; // Yangi ma'lumotlar
    const { id } = req.params; // URL orqali kelgan id

    try {
        // Avval mavjudligini tekshirish
        const crypto = await pool.query('SELECT * FROM crypto WHERE id = $1', [id]);

        if (crypto.rows.length === 0) {
            return res.status(404).json({ message: 'Crypto topilmadi' });
        }

        // Ma'lumotlarni yangilash
        const updatedCrypto = await pool.query(
            `UPDATE crypto 
             SET fullname = COALESCE($1, fullname), 
                 shortname = COALESCE($2, shortname), 
                 status = COALESCE($3, status), 
                 description = COALESCE($4, description) 
             WHERE id = $5 
             RETURNING *`,
            [Nomi, Belgisi, Joizmi, Maqsadi, id]
        );

        res.status(200).json(updatedCrypto.rows[0]); // Yangilangan qatorni qaytarish
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




//delete
router.delete('/:id', async (req, res) => {
    try {
        await pool.query('delete from crypto where id= $1', [req.params.id])
        res.status(200).json('Deleted successfully')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

export default router;
