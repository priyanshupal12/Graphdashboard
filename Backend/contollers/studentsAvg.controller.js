import pool from '../config/db/db.mysql.js'


const studentData = async (req, res) => {
    const { className } = req.params;
    console.log("[CHECKING CODE]", req.params, "[ENOUGH CHECKING CODE]")
    try {
        const [students] = await pool.execute(
            'SELECT * FROM students WHERE class = ?',
            [className]
        );
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const classAverage = async (req, res) => {
    const { className } = req.params;
    try {
        const [[{ avg_marks }]] = await pool.execute(
            `SELECT AVG(score) as avg_marks
      FROM marks
      JOIN students ON marks.student_id = students.id
      WHERE students.class = ?
      `,
            [className]
        );
        const [[{ avg_activities }]] = await pool.execute(
            `
      SELECT AVG(score) as avg_activities
      FROM activity_scores
      JOIN students ON activity_scores.student_id = students.id
      WHERE students.class = ?
      `,
            [className]
        );

        res.json({ avg_marks, avg_activities });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const classSubAvg = async (req, res) => {
    const { className, subjectId } = req.params;
    try {
        const [[{ avg_subject }]] = await pool.execute(
            `
        SELECT AVG(score) as avg_subject
        FROM marks
        JOIN students ON marks.student_id = students.id
        WHERE students.class = ? AND marks.subject_id = ?
        `,
            [className, subjectId]
        );
        res.json({ avg_subject });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const classAvtAvg = async (req, res) => {
    const { className, activityId } = req.params;
    try {
        const [[{ avg_activity }]] = await pool.execute(
            `
        SELECT AVG(score) as avg_activity
        FROM activity_scores
        JOIN students ON activity_scores.student_id = students.id
        WHERE students.class = ? AND activity_scores.activity_id = ?
        `,
            [className, activityId]
        );
        res.json({ avg_activity });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export { studentData, classAverage, classSubAvg, classAvtAvg };


// SELECT AVG(score) as avg_score FROM marks
// JOIN students ON marks.student_id = students.id
// WHERE students.class = ?
// UNION ALL
// SELECT AVG(score) as avg_activity FROM activity_scores
// JOIN students ON activity_scores.student_id = students.id
// WHERE students.class = ?