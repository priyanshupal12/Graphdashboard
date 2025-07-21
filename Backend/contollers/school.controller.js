import pool from '../config/db/db.mysql.js'

const schoolinfo = async (req, res) => {
  try {
    const [[{ avg_marks }]] = await pool.execute(
      'SELECT AVG(score) as avg_marks FROM marks'
    );
    const [[{ avg_activities }]] = await pool.execute(
      'SELECT AVG(score) as avg_activities FROM activity_scores'
    );
    res.json({ avg_marks, avg_activities });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export {schoolinfo}