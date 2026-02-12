import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesCancel } from "./cancel.js";

// seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // obtém a data do input
  const date = selectedDate.value;

  // busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  // exibe os agendamentos
  schedulesShow({ dailySchedules });

  // renderiza os horários disponíveis
  hoursLoad({ date, dailySchedules });

  //  ATIVA O CANCELAMENTO
  schedulesCancel();
}
