import { schedulesDay } from "./schedules/load.js" //carregamento dos agendamentos

//DOMContentLoaded garante que seu JavaScript só rode quando a página já existe, depois que o html carrega.
document.addEventListener("DOMContentLoaded", function() {
  schedulesDay()
})