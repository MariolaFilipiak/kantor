{
    const calculateResult = (amount, currentFrom, currentTo) => {



        const PLN = 1.0;
        const EUR = 4.69;
        const USD = 4.71;
        const NOK = 0.46;
        const CHF = 4.71;

        let rateFrom;
        switch (currentFrom) {
            case "CHF":
                rateFrom = CHF;
                break;
            case "EUR":
                rateFrom = EUR;
                break;
            case "NOK":
                rateFrom = NOK;
                break;
            case "USD":
                rateFrom = USD;
                break;
            case "PLN":
                rateFrom = PLN;
                break;
            default:
                rateFrom = 1;
        }

        let rateTo;
        switch (currentTo) {
            case "CHF":
                rateTo = CHF;
                break;
            case "EUR":
                rateTo = EUR;
                break;
            case "NOK":
                rateTo = NOK;
                break;
            case "USD":
                rateTo = USD;
                break;
            case "PLN":
                rateTo = PLN;
                break;
            default:
                rateTo = 1;
        }
        return (amount * rateFrom) / rateTo;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const currentFrom = document.querySelector(".js-currentFrom");
        const currentTo = document.querySelector(".js-currentTo");
        const amount = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");

        const result = calculateResult(+amount.value, currentFrom.value, currentTo.value);

        resultElement.value = result.toFixed(2);
    };

    const init = () => {

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}