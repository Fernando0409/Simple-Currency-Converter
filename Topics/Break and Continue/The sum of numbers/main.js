function sum(numbers) {
    let suma = 0, i;
    for (i = 0; i < numbers.length ; i++) {
        if (numbers[i] === 0){
            break;
        }else{
            suma += numbers[i];
        }
    }
    return suma;
}

number = [11, 12, 15, 10, 0, 100];
sum(number);