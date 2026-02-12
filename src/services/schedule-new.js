
// Função assíncrona porque a comunicação com a API leva tempo
// fetch não retorna o resultado imediatamente (depende da internet/servidor)
// export async function scheduleNew({ id, name, when }) {
//   try {
  
    // await fetch(`${apiConfig.baseURL}/schedules`, {
      
      // method define o tipo de ação:
      // POST → criar um novo registro no servidor
      // method: "POST",

      // headers informam ao servidor o formato dos dados enviados
      // application/json → estamos enviando um objeto em JSON
      // headers: {
      //   "Content-Type": "application/json",
      // },

      // body é o "corpo" da requisição
      // JSON.stringify transforma o objeto JS em texto JSON
      // Esse é exatamente o dado que será salvo no backend
      // body: JSON.stringify({ id, name, when }),
      // body: JSON.stringify({ name, when }),
    // });

    // Executa se a requisição der certo
//     alert("Agendamento realizado com sucesso!");
    
//   } catch (error) {
//     console.log(error);
//     alert("Não foi possível agendar. Tente novamente mais tarde.");
//   }
// }

// COM MOCK API
import { apiConfig } from "./api-config.js";


export async function scheduleNew({ name, when }) {
  const response = await fetch(`${apiConfig.baseURL}/schedules`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      when,
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar agendamento");
  }

  return response.json();
}
