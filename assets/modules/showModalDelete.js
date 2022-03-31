import deletePaleta from "./deletePaleta.js";

export default function showModalDelete(id) {
  document.querySelector("#overlay-delete").style.display = "flex";

  const btnSim = document.querySelector(".btn-delete-yes");

  btnSim.addEventListener("click", function () {
    deletePaleta(id);
  });
}
