class ContactControler {
  index(request, response) {
    // Listar todos os registros
    response.send("ContactController");
  }

  show() {
    // Opter um registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactControler();
