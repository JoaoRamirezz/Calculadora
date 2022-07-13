//inserir os numeros na tela da calculadora

function insert(num){
    var numero = document.getElementById('calculator__display').innerHTML;
    document.getElementById('calculator__display').innerHTML = numero + num;
}

function clean(){
    document.getElementById('calculator__display').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('calculator__display').innerHTML;
    document.getElementById('calculator__display').innerHTML = resultado.substring(0, resultado.length -1);

}

function calcular(){

    var resultado = document.getElementById('calculator__display').innerHTML;
    if(resultado)
    {
        document.getElementById('calculator__display').innerHTML = eval(resultado);

    }
}