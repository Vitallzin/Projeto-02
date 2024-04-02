const API_KEY = "https://economia.awesomeapi.com.br/json/last/:moedas"; // Substitua por sua chave da API

const moedas = {
    BRL: "Real Brasileiro",
    USD: "Dólar Americano",
    EUR: "Euro",
    // Adicione outras moedas aqui com seus códigos e nomes
};

function converterMoeda(moedaOrigem, valor, moedaDestino) {
    const url = `https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const taxaCambio = data.rates[moedaDestino];
            const valorConvertido = valor * taxaCambio;

            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `
                ${valor} ${moedas[moedaOrigem]} equivalem a:
                **${valorConvertido.toFixed(2)} ${moedas[moedaDestino]}**
            `;
        });
}

document.addEventListener("submit", (event) => {
    event.preventDefault();

    const moedaOrigem = document.getElementById("moeda_origem").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const moedaDestino = document.getElementById("moeda_destino").value;

    converterMoeda(moedaOrigem, valor, moedaDestino);
});
