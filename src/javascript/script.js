function somar(){
    const num1 = parseFloat(document.getElementById("sum1").value)
    const num2 = parseFloat(document.getElementById("sum2").value)
    let result = num1 + num2
    document.getElementById("resultsum").textContent = result
}
function subtrair(){
    const num1 = parseFloat(document.getElementById("subtract1").value)
    const num2 = parseFloat(document.getElementById("subtract2").value)
    let result = num1 - num2
    document.getElementById("resultsubtract").textContent = result
}
function multiplicar(){
    const num1 = parseFloat(document.getElementById("multiply1").value)
    const num2 = parseFloat(document.getElementById("multiply2").value)
    let result = num1 * num2
    document.getElementById("resultmultiply").textContent = result
}
function dividir(){
    const num1 = parseFloat(document.getElementById("division1").value)
    const num2 = parseFloat(document.getElementById("division2").value)
    let result = num1 / num2
    document.getElementById("resultdivision").textContent = result
}