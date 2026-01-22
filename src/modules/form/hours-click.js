export function hoursClick() {
  // Seleciona TODOS os horários disponíveis
  // querySelectorAll retorna uma NodeList (parece um array)
  // ".hour-available" são apenas os horários que podem ser clicados
  const hours = document.querySelectorAll(".hour-available");
  
  // Percorre cada horário disponível
  hours.forEach((available) => {

    // Adiciona o evento de clique em cada <li>
    available.addEventListener("click", (event) => {

      // Remove a classe "hour-selected" de TODOS os horários
      // Isso garante que apenas um horário fique selecionado
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // event.target é o elemento que foi clicado
      // Aqui adicionamos a classe apenas no horário selecionado
      event.target.classList.add("hour-selected");
    });
  });
}
