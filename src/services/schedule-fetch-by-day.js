import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

// Busca na API todos os agendamentos e filtra apenas os do dia informado
export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await response.json();

    const dailySchedules = data.filter((schedule) =>
      dayjs(schedule.when).isSame(dayjs(date), "day"),
    );


    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
  }
}
