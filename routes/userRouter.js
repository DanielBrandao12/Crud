var express = require('express');
var router = express.Router();

const controller = require("../controllers/userController")



router.get('/', controller.index);
router.post('/', controller.createUser)
router.put('/editar/:id',controller.updateUser)
router.delete('/excluir/:id', controller.deleteUser)

module.exports = router;
