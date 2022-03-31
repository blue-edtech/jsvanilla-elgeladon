import { baseURL } from "./env.js";
import closeModalDelete from "./closeModalDelete.js";

export default async function deletePaleta(id) {
  const response = await fetch(`${baseURL}/delete-paleta/${id}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });

  const result = await response.json();

  localStorage.setItem("message", result.message);
  localStorage.setItem("type", "success");

  document.location.reload(true);

  closeModalDelete();
}
