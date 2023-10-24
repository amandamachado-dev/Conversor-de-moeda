


const button = document.getElementById("convertButton")
const selectTo = document.querySelector("#currency-select-to")
const selectFrom = document.querySelector('#currency-select-from')
const bandeiraFrom = document.querySelector(".bandeiraFrom")
const bandeira = document.querySelector(".bandeira-dolar")
const nameCurrency = document.getElementById("currency-name")
const nameCurrencyFrom = document.getElementById("currency-name-from")

const converterMoeda = async () => {
    /*Busca os dados do HTML
    input-que o usuário coloca o valor
    valor do real no final da página que consta na tela
    valor do dolar no final da página que consta na tela*/
    const InputValue = document.getElementById("input-real").value;
    const RealValue = document.getElementById("real-value");
    const DolarValue = document.getElementById("dolar-value");
    
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    console.log(nameCurrencyFrom.value)

    if(selectFrom.value === 'real'){
        RealValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            InputValue)
    }
    if(selectFrom.value === 'dolar'){
        RealValue.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
            InputValue)
    }
    if(selectFrom.value === 'euro'){
        RealValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
            InputValue)
    }

    /*Defino o valor do dólar para que possamos
    realizar a conta 
    const dolar = 4.85
    const euro = 5.29  */
    

    /* xxxxxxxxxxx VERIFICAÇÃO 'SELECT TO' 
    PARA QUE SAIBAMOS QUAL CONVERSÃO REALIZAR xxxxxxxxxxxxxx 
    altera o valor das imagens no final da página,
       deixando no formato de "currency/moeda"
       pega o valor da primeira imagem e reescreve para que apareça
       o valor que está no input(colocado pelo usuário)
       e altera o valor da segunda imagem, para que conste
       o resultado da conversão"result"*/

    if (selectFrom.value === 'real' && selectTo.value === 'dolar') {
        
        DolarValue.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
            InputValue / dolar)
    }
    if (selectFrom.value === 'real' && selectTo.value === 'euro') {
        
        DolarValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
            InputValue / euro)

    }

    if (selectFrom.value === 'dolar' && selectTo.value === 'real') {
        
        DolarValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            InputValue * dolar)
    }
    if (selectFrom.value === 'euro' && selectTo.value === 'real') {
        DolarValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            InputValue * euro)
    }
    if (selectFrom.value === 'euro' && selectTo.value === 'dolar') {
        DolarValue.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
            (InputValue * euro) / dolar)
        }
    if (selectFrom.value === 'dolar' && selectTo.value === 'euro') {
        DolarValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
            (InputValue * dolar) / euro)
        }
    
    if(selectFrom.value === 'dolar' && selectTo.value === 'dolar' || selectFrom.value === 'euro' && selectTo.value === 'euro' || selectFrom.value === 'real' && selectTo.value === 'real'){
        alert('Parâmetro incorreto. Escolha moedas diferentes para conversão')
    }

    
    

}


/* Muda a bandeira e o nome da moeda no final da página)
coloquei um "escutador / addEventListener" para toda vez que 
mudar o valor do selectTo, altere a bandeira e nome da moeda
*/

const changeCurrencyFrom = () => {
    if (selectFrom.value === 'dolar') {
        nameCurrencyFrom.innerHTML = 'Dólar Americano'
        bandeiraFrom.src = "./assets/estados-unidos (1) 1.png"
    }
    if (selectFrom.value === 'euro') {
        nameCurrencyFrom.innerHTML = 'Euro'
        bandeiraFrom.src = "./assets/euro.png"
    }
    if (selectFrom.value === 'real') {
        nameCurrencyFrom.innerHTML = 'Real'
        bandeiraFrom.src = "./assets/brasil 2.png"
    }

    changeCurrencyTo()
}


const changeCurrencyTo = () => {
        
    if (selectTo.value === 'dolar') {
        nameCurrency.innerHTML = 'Dólar Americano'
        bandeira.src = "./assets/estados-unidos (1) 1.png"
    }
    if (selectTo.value === 'euro') {
        nameCurrency.innerHTML = 'Euro'
        bandeira.src = "./assets/euro.png"
    }
    if (selectTo.value === 'real') {
        nameCurrency.innerHTML = 'Real'
        bandeira.src = "./assets/brasil 2.png"
    }


 

    /*Posso chamar minha função de alterar valor */
    converterMoeda()
}


selectFrom.addEventListener('change', changeCurrencyFrom)
selectTo.addEventListener('change', changeCurrencyTo)
button.addEventListener('click', converterMoeda)










