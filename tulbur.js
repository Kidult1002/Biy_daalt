const khaan = document.getElementById("khaan");
const golomt_bank = document.getElementById("golomt_bank");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function() {
    let x
    if (khaan.checked) {
       x = khaan.getAttribute('data-href');
    } else if (golomt_bank.checked) {
        x = golomt_bank.getAttribute('data-href');
    }
    if (x) {
        window.location.href = x;
    } else {
        alert("Банкаа сонгоно уу?");
    }
}