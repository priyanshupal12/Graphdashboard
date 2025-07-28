import pool from '../config/db/db.mysql.js'


const all_Student_of_the_Class = async (req, res) => {
    const { className } = req.params;
    // console.log("[CHECKING CODE]", req.params, "[ENOUGH CHECKING CODE]")
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

const class_Average_markes_And_activity = async (req, res) => {
    const { className } = req.params;
    try {
        const [ avg_marks ] = await pool.execute(
            `
            select AVG(m.score) as avg_marks, s.name as subject_name, m.exam_type, class, roll_number
            from marks as m
            join subjects as s
            on s.id = m.subject_id
            join students as st
            on st.id = m.student_id
            where class = ?
            group by s.name, exam_type, class, roll_number;
      `,
            [className]
        );
        const [ avg_activities ] = await pool.execute(
            `
            SELECT AVG(avts.score) as avg_activities, a.name as activity_name, class, roll_number
            FROM activity_scores as avts
            JOIN activities as a 
            ON avts.activity_id = a.id
            JOIN students as s
            ON avts.student_id = s.id
            WHERE class = ?
            group by a.name, class, roll_number;
      `,
            [className]
        );

        res.json({ avg_marks, avg_activities });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const class_spacific_Subj_Avg = async (req, res) => {
    const { className, subjectId } = req.params;
    try {
        const [ avg_subject_marks ] = await pool.execute(
            `
        SELECT AVG(m.score) as avg_marks, s.name as subject_name, m.exam_type, m.exam_type
        FROM marks as m
        JOIN students as st ON m.student_id = st.id
        JOIN subjects as s ON m.subject_id = s.id
        WHERE st.class = ? AND m.subject_id = ?
        group by m.exam_type, s.name, m.exam_type;
        `,
            [className, subjectId]
        );
        res.json({ avg_subject_marks });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const class_spacific_Avt_Avg = async (req, res) => {
    const { className, activityId } = req.params;
    try {
        const [ avg_activity ] = await pool.execute(
            `
        SELECT AVG(score) as avg_activity, activities.name, students.class 
        FROM activity_scores
        JOIN students ON activity_scores.student_id = students.id
        JOIN activities ON activity_scores.activity_id = activities.id
        WHERE students.class = '10A' AND activity_scores.activity_id = 1
        group by activities.name, students.class
        `,
            [className, activityId]
        );
        res.json({ avg_activity });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export { all_Student_of_the_Class, class_Average_markes_And_activity, class_spacific_Subj_Avg, class_spacific_Avt_Avg };
