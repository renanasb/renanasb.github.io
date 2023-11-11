import { viewController } from "./view/viewController.js";
import { Usuario } from "./model/usuario.model.js";

let data = [];
const submitType = { NEW: 0, UPDATE: 1 };
let submitState = submitType.NEW;
let currentId = null;

const handleSubmit = (event) => {
  event.preventDefault();
  const user = new Usuario(nome.value, idade.value, login.value, senha.value);
  if (submitState == submitType.NEW) {
    addUser(user);
  } else if (submitState == submitType.UPDATE) {
    updateUser(currentId, user);
  }else {
  }
  viewController.update(data, new Usuario("", null, "", ""));
};

const addUser = (newUser) => {
  data.push(newUser);
};

const updateUser = (index, userToUpdate) => {
  data[index] = userToUpdate;
};

const deletUser = (index) => {
  data.splice(index, 1);
};

const clickEsquerdo = (event) => {
  currentId = event.target.closest("tr").id.split("")[4];
  const atualizar  =  window.confirm(
    `você realmente deseja fazer alterações no usário: ${data[currentId]
      .getNome()
      .toUpperCase()} será carregado para edição`
  );
  if(atualizar){
    viewController.updateForm(data[currentId]);
    submitState = submitType.UPDATE;
    btnSub.innerText = "Update";

  }
};

const clickDireito = (event) => {
  event.preventDefault();
  if (event.button == 2) {
    currentId = event.target.closest("tr").id.split("")[4];
    const valorComfirmacao = window.confirm(
      `Opção deletar, você realmente deseja deletar o usuário: ${data[currentId]
        .getNome()
        .toUpperCase()}?`
    );
    if (valorComfirmacao) {
      deletUser(currentId);
    }

    viewController.update(data, new Usuario("", null, "", ""));
  }
};
const controller = {
  iniciar: () => {
    viewController.build();
    const form = document.getElementById("signForm");
    form.addEventListener("submit", handleSubmit);
    const userList = document.getElementById("users-result");

    userList.addEventListener("click", clickEsquerdo);
    userList.addEventListener("contextmenu", clickDireito);
  },
};

export { controller };
