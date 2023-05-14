
//AXIOS

const convertValues = async () => {
    const inputReais = document.getElementById('input1').value
    const p = document.getElementById('ValorRealMudar')
    const p1 = document.getElementById('ValorEmDolar')

// async await , SÓ USADO DENTRO DE FUNÇÕES

   const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    console.log(data)

    const dolar = data.USDBRL.high
    const euro= data.EURBRL.high
    const bitcoin= data.BTCBRL.high

    if (select1.value === "R$ Real Brasileiro") {
        p.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(inputReais)
    }

    // p1.innerHTML = (inputReais / dolar).toFixed(2)  



        if (select1.value === "R$ Real Brasileiro" && select.value === "US$ Dólar Americano") {
            p1.innerHTML = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }
            ).format(inputReais / dolar)
        }

        else if (select1.value === 'R$ Real Brasileiro' && select.value === "€ Euro") {
            p1.innerHTML = new Intl.NumberFormat('de-DE',
                { style: 'currency', currency: 'EUR' }
            ).format(inputReais / euro)
        }

        else if (select1.value === 'R$ Real Brasileiro' && select.value === '₿ Bitcoin') {
            p1.innerHTML = (inputReais / bitcoin)

        }

        else if (select1.value === 'R$ Real Brasileiro' && select.value === 'R$ Real Brasileiro') {
            p1.innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(inputReais)
        }


    MudançasAdcionais()
}

const button = document.getElementById('IdButton')

const select = document.getElementById('select')
button.addEventListener('click', convertValues)





const MudançasAdcionais = () => {
    const mudarNomeSelect1 = document.getElementById('NomeReal')
    const labelValor = document.getElementById('labelValor')
    const imgdecima = document.getElementById('imagemdecima')

    if (select1.value === 'R$ Real Brasileiro') {
        imgdecima.src = './brasil 2.png'
    }

    if (select1.value === 'US$ Dólar Americano') {
        imgdecima.src = './estados-unidos (1) 1.png'
    }

    if (select1.value === '€ Euro') {
        imgdecima.src = './Design sem nome 1.png'
    }

    if (select1.value === "R$ Real Brasileiro") {
        mudarNomeSelect1.innerHTML = "Real"
        labelValor.innerHTML = 'Valor em Real'
    }
    if (select1.value === "US$ Dólar Americano") {
        mudarNomeSelect1.innerHTML = 'Dólar Americano'
        labelValor.innerHTML = 'Valor em Dólar'
    }
    if (select1.value === "€ Euro") {
        mudarNomeSelect1.innerHTML = "Euro"
        labelValor.innerHTML = "Valor em Euro"
    }
}







const changeDolarEEuro = () => {
    const text = document.getElementById('TextoDolarAmericano')
    const img = document.getElementById('Imagem-das-bandeiras')

    if (select.value === 'R$ Real Brasileiro') {
        text.innerHTML = 'Real'
        img.src = './brasil 2.png'
    }

    if (select.value === "€ Euro") {
        text.innerHTML = '€ Euro'
        img.src = "./Design sem nome 1.png"

    }
    if (select.value === "US$ Dólar Americano") {
        text.innerHTML = 'Dólar Americano'
        img.src = "./estados-unidos (1) 1.png"
    } if (select.value === "₿ Bitcoin") {
        text.innerHTML = 'Bitcoin'
        img.src = "./Design sem nome (1) 1.png"
    }


    convertValues()     /* ISSO TÁ AQUI PRA QUANDO MUDAR DE DOLAR PRA EURO MUDAR TBM O VALOR QUE ESTAVA*/
}

select.addEventListener("change", changeDolarEEuro)


