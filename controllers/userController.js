
const usersModels = require('../models/user')

function index(req, res) {

  const users = usersModels.getAll()

  res.render('index', { users })
};

function createUser(req, res) {

  const { nome, sobrenome, email } = req.body
  const users = usersModels.getAll()

  let id = 1

  users.forEach(e => {
    console.log(e.id)
    if (!e.id) {

      id = 1

    } else  {

      id++

    }
  });
console.log(id)
  usersModels.create(id, nome, sobrenome, email)

  return res.redirect("/");
}

function updateUser(req, res) {

  const { id } = req.params
  const { nome, sobrenome, email } = req.body

  usersModels.update(id, nome, sobrenome, email)

  return res.redirect("/")

}


function deleteUser(req, res) {

  const { id } = req.params
console.log(id)
  usersModels.deletes(id)

  return res.redirect("/")
}

module.exports = { index, createUser, updateUser, deleteUser };