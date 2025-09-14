-- Student Progress Dashboard Database Schema
CREATE DATABASE student_progress_dashboard;
USE student_progress_dashboard;

-- Students table: Stores student information
CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  class VARCHAR(50) NOT NULL,
  roll_number VARCHAR(50) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_students_class (class)
);

-- Subjects table: Stores academic subjects
CREATE TABLE subjects (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Activities table: Stores extracurricular activities
CREATE TABLE activities (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Users table: Stores user accounts (teachers/principals)
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('teacher', 'principal') NOT NULL,
  subject_id INT DEFAULT NULL,
  activity_id INT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (subject_id) REFERENCES subjects(id),
  FOREIGN KEY (activity_id) REFERENCES activities(id),
  INDEX idx_users_email (email)
);

-- Marks table: Stores student academic marks
CREATE TABLE marks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT NOT NULL,
  subject_id INT NOT NULL,
  score INT NOT NULL CHECK (score >= 0 AND score <= 100),
  test_date DATE NOT NULL,
  exam_type VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE,
  INDEX idx_marks_student_subject (student_id, subject_id),
  INDEX idx_marks_date (test_date)
);

-- Activity Scores table: Stores student activity scores
CREATE TABLE activity_scores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT NOT NULL,
  activity_id INT NOT NULL,
  score INT NOT NULL CHECK (score >= 0 AND score <= 100),
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE,
  INDEX idx_activity_scores_student_activity (student_id, activity_id),
  INDEX idx_activity_scores_date (date)
);




-- INSERT INTO subjects (name) VALUES
-- ('Mathematics'), ('English'), ('Science');
-- INSERT INTO activities (name) VALUES
-- ('Sports'), ('Science Practical');
-- INSERT INTO students (name, class, roll_number) VALUES
-- ('Alice Johnson', '10A', 'R001'),
-- ('Bob Smith', '10A', 'R002'),
-- ('Charlie Brown', '10B', 'R003');
-- INSERT INTO users (name, email, password, role, subject_id)
-- VALUES
-- ('Mr. Math', 'math@example.com', 'hashed_password_here', 'teacher', 1),
-- ('Ms. English', 'english@example.com', 'hashed_password_here', 'teacher', 2);
-- INSERT INTO users (name, email, password, role, activity_id)
-- VALUES
-- ('Coach Sports', 'sports@example.com', 'hashed_password_here', 'teacher', 1);
-- INSERT INTO users (name, email, password, role)
-- VALUES
-- ('Principal Jones', 'principal@example.com', 'hashed_password_here', 'principal');
-- INSERT INTO marks (student_id, subject_id, score, test_date) VALUES
-- (1, 1, 88, '2024-07-01'),
-- (1, 2, 75, '2024-07-01'),
-- (2, 1, 92, '2024-07-01');
-- INSERT INTO activity_scores (student_id, activity_id, score, date) VALUES
-- (1, 1, 85, '2024-07-02'),
-- (2, 1, 95, '2024-07-02'),
-- (3, 2, 78, '2024-07-02');