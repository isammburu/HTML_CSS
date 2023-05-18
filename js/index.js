function myFunc() {
    let swali = prompt("what is your name");
    alert(`your name is ${swali}`)
}
function myWrite() {
    document.getElementById("demo").innerHTML(`we want to name you ${swali}`);
}
if (swali == 'isam'){
    myWrite();
}

