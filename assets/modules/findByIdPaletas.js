import { baseURL } from "./env.js";
import showMessageAlert from "./showMessageAlert.js";
import closeMessageAlert from "./closeMessageAlert.js";
import showModal from "./showModal.js";
import showModalDelete from "./showModalDelete.js"

export default async function findByIdPaletas() {
  const id = document.querySelector("#search-input ").value;

  if (id == "") {
    localStorage.setItem("message", "Digite um ID para pesquisar!");
    localStorage.setItem("type", "danger");
    showMessageAlert();
    closeMessageAlert();
    return;
  }

  const response = await fetch(`${baseURL}/one-paleta/${id}`);
  const paleta = await response.json();

  if (paleta.message != undefined) {
    localStorage.setItem("message", paleta.message);
    localStorage.setItem("type", "danger");
    showMessageAlert();
    return;
  }

  document.querySelector(".list-all").style.display = "block";
  document.querySelector(".paleta-list").style.display = "none";
  const chosenPaletaDiv = document.querySelector("#chosen-paleta");

  chosenPaletaDiv.innerHTML = `
    <div class="paleta-card-item" id="paleta-card-item-${paleta._id}">
    <div>
        <div class="paleta-card-item-sabor">${paleta.sabor}</div>
        <div class="paleta-card-item-preco">R$ ${paleta.preco}</div>
        <div class="paleta-card-item-descricao">${paleta.descricao}</div>
        
        <div class="actions">
            <button class="actions-edit btn">Editar</button> 
            <button class="actions-delete btn">Apagar</button> 
        </div>
    </div>
    <img class="paleta-card-item-foto" src="${paleta.foto}" alt="Paleta de ${paleta.sabor}" />
  </div>`;

  document.querySelectorAll(".actions-edit").forEach((btnEdit) => {
    btnEdit.addEventListener("click", function () {
      showModal(paleta._id);
    });
  });

  document.querySelectorAll(".actions-delete").forEach((btnDelete) => {
    btnDelete.addEventListener("click", function () {
      showModalDelete(paleta._id);
    });
  });
}
