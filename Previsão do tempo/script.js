//Variáveis e seleções de elementos
const cityInput = document.querySelector("#city-input");
const searchBt = document.querySelector("#search")





//funções






//Eventos
searchBt.addEventListener("click" , (e) => {
    e.preventDefault(); //evita enviar o formulário
    console.log("teste");

    const city = cityInput.value;
    console.log(city);
})




