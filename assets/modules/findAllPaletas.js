import { baseURL } from "./env.js";
import showModal from "./showModal.js";
import showModalDelete from "./showModalDelete.js";

export default async function findAllPaletas() {
  const response = await fetch(`${baseURL}/all-paletas`);

  const paletas = await response.json();

  paletas.forEach(function (paleta) {
    document.querySelector("#paletaList").insertAdjacentHTML(
      "beforeend",
      `
      <div class="paleta-list-item" id="paleta-list-item-${paleta._id}">
          <div>
              <div class="paleta-list-item-sabor">${paleta.sabor}</div>
              <div class="paleta-list-item-preco">R$ ${paleta.preco}</div>
              <div class="paleta-list-item-descricao">${paleta.descricao}</div>
  
              <div class="actions">
                <button class="actions-edit btn")">Editar</button> 
                <button class="actions-delete btn")">Apagar</button> 
              </div>
          </div>
          
          <img class="paleta-list-item-foto" src="${paleta.foto}" alt="Paleta de ${paleta.sabor}" />
  
          
      </div>
      `
    );

    const btnsEdit = document.querySelectorAll(".actions-edit");

    btnsEdit.forEach((btnEdit) => {
      btnEdit.addEventListener("click", function () {
        showModal(paleta._id);
      });
    });

    const btnsDelete = document.querySelectorAll(".actions-delete");

    btnsDelete.forEach((btnDelete) => {
      btnDelete.addEventListener("click", function () {
        showModalDelete(paleta._id);
      });
    });
  });
}
