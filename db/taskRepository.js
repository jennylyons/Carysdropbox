// task_repository.js

class TaskRepository {
  constructor(dao) {
    this.dao = dao;
  }

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(60),
        duration INTEGER,
        time VARCHAR(30),
        day VARCHAR(30),
        energy VARCHAR(30),
        cost INTEGER,
        progression VARCHAR(30),
        multiple_partners INTEGER
    )`;
    return this.dao.run(sql);
  }

  create(name, duration, time, day, energy, cost, progression, multiplePartners) {
    return this.dao.run(
      `INSERT INTO tasks (name, duration, time, day, energy, cost, progression, multiple_partners)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, duration, time, day, energy, cost, progression, multiplePartners],
    );
  }

  update(name, duration, time, day, energy, cost, progression, multiplePartners, id) {
    return this.dao.run(
      `UPDATE tasks
      SET name = ?,
        duration = ?,
        time = ?,
        day = ?,
        energy = ?,
        cost = ?,
        progression = ?,
        multiple_partners = ?
      WHERE id = ?`,
      [name, duration, time, day, energy, cost, progression, multiplePartners, id],
    );
  }

  delete(id) {
    return this.dao.run(`DELETE FROM tasks WHERE id = ?`, [id]);
  }

  getById(id) {
    return this.dao.get(`SELECT * FROM tasks WHERE id = ?`, [id]);
  }

  getAll() {
    return this.dao.all(`SELECT * FROM tasks`);
  }
}

module.exports = TaskRepository;
