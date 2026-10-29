function addNumbers() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    let sum = parseInt(a) + parseInt(b);

    document.getElementById("result").value = sum;
}