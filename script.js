function add() {
    let firstnum = parseInt(document.getElementById("num1").value);
    let secondnum = parseInt(document.getElementById("num2").value);
    let result = firstnum + secondnum;
    document.getElementById("res").innerHTML = result;
    
}