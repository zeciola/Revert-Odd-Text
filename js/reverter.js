var form = document.getElementById('formulario');
var campo = document.getElementById('campo');


function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function reverseOdd() {

    console.log(campo.value);

    let campo_s = campo.value.split(' ');
    
    console.log(campo_s);

    let campo_s_range = campo_s.length;

    console.log(campo_s_range);

    let resultReverse = [];

    for (i = 0 ; i < campo_s_range; i++) {

        if (i % 2 == 0) {

            let reverseWord =  reverseString(campo_s[i]);
            
            resultReverse.push(reverseWord);

        } else {
            resultReverse.push(campo_s[i]);
        }

        console.log(resultReverse.join(' '));

    }

    return resultReverse.join(' ');
}


form.addEventListener('submit', function (e) {

    e.preventDefault();

    document.getElementById("texto").getElementsByTagName("h1")[0].innerHTML = reverseOdd();
    
})