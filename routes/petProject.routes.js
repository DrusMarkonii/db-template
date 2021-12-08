const Router = require('express');
const router = new Router();
const petProjectController = require('../controller/petProject.controller')


router.post('/pet-project', petProjectController.addPetProject)
router.get('/pet-project', petProjectController.getPetProject)

module.exports = router;