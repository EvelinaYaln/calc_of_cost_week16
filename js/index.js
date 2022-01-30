cost = () => {

    let mileage = document.querySelector('#mileage')
    const km = 10000;
    let basePrice = 100;
    let sum;
    let age = document.querySelectorAll('[name="age"]');
    let bodyType = document.querySelectorAll('[name="bodyType"]');
    let carModel = document.querySelector('#carModel');
    let climatControl = document.querySelector('#climatControl');
    let bigWindows = document.querySelector('#bigWindows');
    let forcefulLights = document.querySelector('#forcefulLights');

    calc = () => {
        if (mileage.value === '' || mileage.value === 0) {
            document.querySelector('#error').innerHTML = 'Введите число. Число должно быть больше нуля'
        } else document.querySelector('#error').innerHTML = '';

        sum = +basePrice * (+km / +mileage.value);
        for (item of age) {
            if (item.checked) {
                sum *= +item.value;

            }
        }
        for (type of bodyType) {
            if (type.checked) {
                sum *= +type.value;

            }
        }
        sum = sum + +carModel.value;
        if (climatControl.checked) {
            sum += +climatControl.value;
        }

        if (bigWindows.checked) {
            sum += +bigWindows.value;
        }

        if (forcefulLights.checked) {
            sum += +forcefulLights.value;
        }

        document.querySelector('#cost').innerHTML = (`${sum} рублей`);
    }

    calc();

    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        input.addEventListener('input', function() {
            calc();
        })
    }
}