class UserService {
  registerUser(name, email, password) {
    const users = this.getUsersFromLocalStorage();
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      throw new Error("Usuário já registrado!");
    }

    const newUser = { nome_usuario: name, email, senha: password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  }

  loginUser(email, password) {
    const users = this.getUsersFromLocalStorage();
    const user = users.find((user) => user.email === email && user.senha === password);

    if (!user) {
      throw new Error("Credenciais inválidas!");
    }

    return user;
  }

  getUsersFromLocalStorage() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  }
}

export default new UserService();
