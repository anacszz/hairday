// import { apiConfig } from "./api-config.js"

// export async function scheduleCancel ({ id }) {
//   try {
//     await fetch (`${apiConfig.baseURL}/schedules/${id}`, {
//       method: "DELETE",
//     })

//     alert("Agendamento cancelado com sucesso!")
//   } catch (error) {
//     console.log(error)
//     alert("Não foi possível cancelar o agendamento.")
//   }

// }

// COM MOCK API
import { apiConfig } from "./api-config.js";

export async function scheduleCancel(id) {
  const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao cancelar agendamento");
  }

  return true;
}
