const db = require('../db');

class PetProjectController {
    async addPetProject(req, res) {
        const {title, content, userId} = req.body;
        const newPetProject = await db.query('INSERT INTO pet_project (title, content, user_id) values ($1, $2, $3) RETURNING *', [title, content, userId])
       
        res.json(newPetProject.rows[0])
       
    }

    async getPetProject(req, res) {
       const id = req.query.id;
       const PetProjects = await db.query('select * from pet_project where user_id = $1', [id])
       res.json(PetProjects.rows)
    }
}

module.exports = new PetProjectController();