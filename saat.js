var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var tarih = document.querySelector("p");
var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
console.log(tarih)

function format(saatcek) {
    var bSaat = saatcek.toString();
    if (bSaat.length == 1) {
    return "0" + bSaat;
    } else {
    return bSaat;
}}

setInterval(function(){
    const now = new Date();
    tarih.textContent = now.getFullYear() + '-' + format((now.getMonth()+1)) + '-' + format(now.getDate())+ ' ' + week[now.getDay()];;
    seconds.textContent = format(now.getSeconds());
    hours.textContent = format(now.getHours());
    minutes.textContent = format(now.getMinutes());

},1000)