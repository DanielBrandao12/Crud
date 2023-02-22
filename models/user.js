const fs = require("fs");

function User(id, nome, sobrenome, email) {

  this.id = id
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.email = email;


}

//acessa minha lista de usuários que está em um JSON
function getAll() {
  const listUsers = JSON.parse(
    fs.readFileSync("database/bd.json", "utf-8")
  );
  return listUsers.map(
    (user) =>
      new User(
        user.id,
        user.nome,
        user.sobrenome,
        user.email,
      )
  );
}



//função que vai receber os dados e salvar na minha lista
function create(id, nome, sobrenome, email) {

  const newUser = new User(id, nome, sobrenome, email);
  const listUsers = getAll();

  listUsers.push(newUser);

  fs.writeFileSync("database/bd.json", JSON.stringify(listUsers));

}


//função vai receber dados e salvar a edição
function update(id, nome, sobrenome, email) {

  const user = getAll()

  user.forEach(e => {

    if (e.id == id) {

      e.nome = nome
      e.sobrenome = sobrenome
      e.email = email

      fs.writeFileSync("database/bd.json", JSON.stringify(user));

    }
  })
}

//função vai deletar o usuário pelo id
function deletes(id) {

  const user = getAll()

  user.forEach(e => {

    if (e.id == id) {

      user.splice(id - 1, 1)

      fs.writeFileSync("database/bd.json", JSON.stringify(user));

    }
  })
}

module.exports = {
  getAll,
  create,
  update,
  deletes
}