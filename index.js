let dollar
const rubble = 1
let euro

// create axios request to get currencies
axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(currencies => {
        dollar = currencies.data.Valute.USD.Value
        euro = currencies.data.Valute.EUR.Value
    })

const outputField = document.querySelector('.output-value')
const calculateButton = document.querySelector('.calculate')

function currencyToCurrency() {

    // getting settings for currencies convert and quantity of currency
    const firstCurrency = document.querySelector('.first-currency').value
    const secondCurrency = document.querySelector('.second-currency').value
    const convertValue = document.querySelector('.input-value').value

    // if user input string
    if (isNaN(convertValue)) {
        outputField.textContent = 'Введено не число'
        return
    }

    // converting dollar to other currencies
    if (firstCurrency == 'dol') {

        switch (secondCurrency) {
            case 'rub':
                outputField.textContent = convertValue * dollar
                break
            case 'dol':
                outputField.textContent = convertValue
                break
            case 'eur':
                outputField.textContent = (convertValue * dollar) / euro // at first converting to rubble, then to dollar
                break
        }
    }

    // converting euro to other currencies
    if (firstCurrency == 'eur') {

        switch (secondCurrency) {
            case 'rub':
                outputField.textContent = convertValue * euro
                break
            case 'dol':
                outputField.textContent = (convertValue * euro) / dollar // at first converting to rubble, then to dollar
                break
            case 'eur':
                outputField.textContent = convertValue
                break
        }
    }

    // converting rubble to other currencies
    if (firstCurrency == 'rub') {

        switch (secondCurrency) {
            case 'rub':
                outputField.textContent = convertValue / rubble
                break
            case 'dol':
                outputField.textContent = convertValue / dollar
                break
            case 'eur':
                outputField.textContent = convertValue / euro
                break
        }
    }

}

// event listener on button "calculate"
calculateButton.addEventListener('click', currencyToCurrency)
