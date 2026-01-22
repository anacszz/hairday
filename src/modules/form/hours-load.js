import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

// Seleciona a <ul> (ou <ol>) onde os horários serão renderizados
// Esse elemento já existe no HTML
const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  //limpa a lista de horários
  hours.innerHTML = "";

  //obtem a lista de horarios ocupados
  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))


  // Percorre todos os horários de funcionamento
  // map cria um NOVO array baseado no openingHours
  const opening = openingHours.map((hour) => {
    // hour é uma string no formato "09:00"

    // split(":") transforma "09:00" em ["09", "00"]
    // a desestruturação pega apenas o primeiro item do array
    // ou seja, somente a hora ("09")
    const [scheduleHour] = hour.split(":");

    // dayjs(date) cria a data base (ex: 2026-01-16 00:00)
    // add(scheduleHour, "hour") adiciona a hora à data
    // isAfter(dayjs()) verifica se esse horário ainda NÃO passou
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast
    // Retorna um objeto para cada horário
    // hour → horário original ("09:00")
    // available → se o horário está disponível ou não
    return {
      hour,
      available,
    };
  });

  // Percorre o array de horários já tratados
  opening.forEach(({ hour, available }) => {
    // Cria um elemento <li> para cada horário
    const li = document.createElement("li");

    // Adiciona a classe base do horário
    li.classList.add("hour");

    // Adiciona a classe de acordo com a disponibilidade
    // se available for true → hour-available
    // se available for false → hour-unavailable
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    // Define o texto que aparecerá dentro do <li>
    li.textContent = hour;

    //verifica se tem que adicionar um cabeçalho/titulo
    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    // Insere o <li> dentro da lista de horários no HTML
    hours.append(li);
  });

  //adiciona o evento de click nos horários disponíveis (função do arquivo hours-click.js)
  hoursClick();
}

//função para separar a exibição por período do dia
function hourHeaderAdd(title) {
  const header = document.createElement("li");
  //quando é titulo a classe do titulo é hour-period
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
