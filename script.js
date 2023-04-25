
var Iftari = ["6:45", "6:45", "6:45", "6:46", "6:46", "6:47", "6:47", "6:48", "6:48", "6:48", "6:49", "6:49", "6:50", "6:50", "6:51", "6:51", "6:51", "6:52", "6:52", "6:53", "6:53", "6:54", "6:54", "6:55", "6:55", "6:55", "6:56", "6:56", "6:57", "6:57"]
var Sehri = ["5:17", "5:16", "5:15", "5:14", "5:13", "5:11", "5:10", "5:09", "5:08", "5:07", "5:06", "5:05", "5:04", "5:02", "5:01", "5:00", "4:59", "4:58", "4:57", "4:56", "4:55", "4:54", "4:52", "4:51", "4:50", "4:49", "4:48", "4:47", "4:47", "4:45"]
console.log(Iftari.length);
console.log(Sehri.length);
var roza = prompt("Which Ramadan is Today")
var iT = Iftari[roza - 1]
var sT = Sehri[roza - 1]
if (iT == undefined && sT == undefined) {
    iT = "00:00"
    sT = "00:00"
}
document.getElementById("roza").innerHTML = roza
document.getElementById("sehriTime").innerHTML = sT + " "
document.getElementById("iftariTimer").innerHTML = iT + " "
function refresh() {
    location.reload()
}
