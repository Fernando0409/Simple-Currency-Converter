const input = require('sync-input');

const arrayDivisas = ['JPY','EUR','RUB','USD','GBP'];
const arrayDivisasPrices = [113.5, 0.89, 74.36, 1, 0.75];

function setDivisaFrom(){
    console.log("What do you want to convert?");
    let divisaFrom = input("From:").toUpperCase();
    let indexFrom = arrayDivisas.indexOf(divisaFrom);
    if (indexFrom !== -1){
        setDivisaTo(indexFrom);
    }else{
        console.log("Unknown currency");
    }
}

function setDivisaTo(indexFrom){
    let divisaTo = input("To:").toUpperCase();
    let indexTo = arrayDivisas.indexOf(divisaTo);

    if (indexTo !== -1){
        setAmount(indexFrom, indexTo);
    } else{
        console.log("Unknown currency");
    }
}

function setAmount(indexFrom, indexTo) {
    let money = Number(input("Amount:"));
    let result = 0;

    if (money < 0){
        console.log("The amount cannot be less than 1");
    } else if(isNaN(money)) {
        console.log("The amount has to be a number");
    } else{
        result = ((1/arrayDivisasPrices[indexFrom])*money) * arrayDivisasPrices[indexTo];
        console.log(`Result: ${money} ${arrayDivisas[indexFrom]} equals ${result.toFixed(4)} ${arrayDivisas[indexTo]}`);
    }
}


function welcome(){
    let exit = false;
    let option = 0;
    while(!exit){
        console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
        option = Number(input());
        switch (option){
            case 1:
                setDivisaFrom();
                break;
            case 2:
                console.log("Have a nice day!");
                exit = true;
                break;
            default:
                console.log("Unknown input");
                break;
        }
    }
}


console.log("Welcome to Currency Converter!");
console.log(`1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

welcome();


