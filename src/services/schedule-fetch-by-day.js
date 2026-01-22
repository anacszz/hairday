import dayjs from "dayjs";
import { apiConfig } from "./api-config";

// Busca na API todos os agendamentos e filtra apenas os do dia informado
export async function scheduleFetchByDay({ date }) {
  try {
    // Faz a requisição para a API (GET por padrão)
    // Aqui estamos pedindo TODOS os agendamentos salvos
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    //converte para JSON
    const data = await response.json();

    // Filtra os agendamentos pelo dia selecionado
    // isSame(..., "day") compara apenas o DIA (ignora horas)
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );
    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
  }
}

