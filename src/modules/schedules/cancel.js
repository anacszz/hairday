import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load.js";

export function schedulesCancel() {
  const cancelIcons = document.querySelectorAll(".cancel-icon");

  cancelIcons.forEach((icon) => {
    icon.addEventListener("click", async () => {
      try {
        const li = icon.closest("li");
        const id = li.dataset.id;

        await scheduleCancel(id);

        // recarrega horários e libera o horário
        schedulesDay();
      } catch (error) {
        alert("Não foi possível cancelar o agendamento.");
        console.log(error);
      }
    });
  });
}
