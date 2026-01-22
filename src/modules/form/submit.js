import dayjs from "dayjs";

// Importa a função responsável por enviar os dados para a API
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date"); //input de data

//carrega a data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    //recuperando o nome do cliente e remove espaços com trim
    const name = clientName.value.trim()

     // Validação: nome não pode estar vazio
    if (!name) {
      return alert("Informe o nome do cliente!")
    }

    //recupera o horário selecionado pelo usuario
    const hourSelected = document.querySelector(".hour-selected")
    // Validação: é obrigatório selecionar um horário
    if(!hourSelected) {
      return alert("Selecione a hora.")
    }

    // Recupera somente a hora do texto (ex: "09:00" → "09")
    const [hour] = hourSelected.innerText.split(":")
    
    // Cria a data final do agendamento
    // Junta a data escolhida com a hora selecionada
    const when = dayjs(selectedDate.value).add(hour, "hour")
    
    // Gera um ID único baseado no timestamp atual
    const id = new Date().getTime()

     // Envia os dados para a API
    // await faz o código esperar a resposta do servidor
    //faz o agendamento
    await scheduleNew ({
      id,
      name,
      when,
    })

    //recarrega os agendamentos
    await schedulesDay()
  
    //limpa o input de nome do cliente
    clientName.value = ""
    
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
