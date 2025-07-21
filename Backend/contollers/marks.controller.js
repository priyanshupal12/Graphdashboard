import pool from '../config/db/db.mysql.js'

const markes = async (req, res) => {
    const { id } = req.params;
    const { score } = req.body;
    const { role, subject_id } = req.user;

    try {
        const [result] = await pool.execute(
            'SELECT * FROM marks WHERE id = ?',
            [id]
        );
        if (result.length === 0) return res.status(404).json({ error: 'Not found' });

        const mark = result[0];

        if (role === 'teacher' && mark.subject_id !== subject_id) {
            return res
                .status(403)
                .json({ error: 'Teacher cannot edit other subject marks' });
        }

        await pool.execute('UPDATE marks SET score = ? WHERE id = ?', [
            score,
            id,
        ]);
        res.status(200).json({ message: 'Marks updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export { markes }