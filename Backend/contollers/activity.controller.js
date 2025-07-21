import pool from '../config/db/db.mysql.js'

const activities = async (req, res) => {
    const { id } = req.params;
    const { score } = req.body;
    const { role, activity_id } = req.user;

    try {
        const [result] = await pool.execute(
            'SELECT * FROM activity_scores WHERE id = ?',
            [id]
        );
        if (result.length === 0)
            return res.status(404).json({ error: 'Not found' });

        const activity = result[0];

        if (role === 'teacher' && activity.activity_id !== activity_id) {
            return res
                .status(403)
                .json({ error: 'Teacher cannot edit other activities' });
        }

        await pool.execute('UPDATE activity_scores SET score = ? WHERE id = ?', [
            score,
            id,
        ]);
        res.json({ message: 'Activity score updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export {activities}