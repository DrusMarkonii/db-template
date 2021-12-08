const db = require('../db');

class UserController {
    async createUser(req, res) {
        const {name, surname, age, phone, job} = req.body
        console.log(name, surname, age, phone, job)
        const newPerson = await db.query(`INSERT INTO person (name, surname, age, phone, job) values ($1, $2, $3, $4, $5) RETURNING *`, [name, surname, age, phone, job])
        res.json(newPerson.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }

    async getOneUser(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT * FROM person WHERE id = $1', [id])
        res.json(user.rows[0])
    }

    async updateUser(req, res) {
        const {id, name, surname, age, phone, job} = req.body
        const user = await db.query(
            'UPDATE person set name = $1, surname = $2, age = $3, phone = $4, job = $5 where id = $6 RETURNING *',
            [name, surname, age, phone, job, id])
        res.json(user.rows[0])
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM person WHERE id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController();