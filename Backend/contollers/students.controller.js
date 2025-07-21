import pool from '../config/db/db.mysql.js'

const studentInfoFull = async (req, res) => {
    const { id } = req.params;
    try {
        const [[student]] = await pool.execute(
            'SELECT * FROM students WHERE id = ?',
            [id]
        );
        if (!student) return res.status(404).json({ error: 'Student not found' });

        const [marks] = await pool.execute(
            `
      SELECT marks.*, subjects.name as subject_name
      FROM marks
      JOIN subjects ON marks.subject_id = subjects.id
      WHERE marks.student_id = ?
      `,
            [id]
        );

        const [activities] = await pool.execute(
            `
      SELECT activity_scores.*, activities.name as activity_name
      FROM activity_scores
      JOIN activities ON activity_scores.activity_id = activities.id
      WHERE activity_scores.student_id = ?
      `,
            [id]
        );

        res.json({ student, marks, activities });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const studentInfo = async (req, res) => {
    const { id } = req.params;
    try {
        const [[{ avg_marks }]] = await pool.execute(
            'SELECT AVG(score) as avg_marks FROM marks WHERE student_id = ?',
            [id]
        );
        const [[{ avg_activities }]] = await pool.execute(
            'SELECT AVG(score) as avg_activities FROM activity_scores WHERE student_id = ?',
            [id]
        );
        res.json({ avg_marks, avg_activities });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export { studentInfoFull, studentInfo }