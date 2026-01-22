import { schedulesDay } from "../schedules/load";

//seleciona o input de data
const selectedDate = document.getElementById("date");

// Sempre que o usuário mudar a data...
// o evento onchange é disparado
selectedDate.onchange = () => schedulesDay();
// Recarrega os horários do dia selecionado
// Isso normalmente vai buscar novos dados da API
// e renderizar novamente a lista de horários
