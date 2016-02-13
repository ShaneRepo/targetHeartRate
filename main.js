function calcHeartRate(){
    var user = document.getElementById("age").value;
    var maxRate = 220 - user;
    var minTarget = maxRate * .5;
    var maxTarget = maxRate * .85;
    document.getElementById("result").value = minTarget + " to " + maxTarget + " beats per minute.";
}
document.getElementById("submit").addEventListener("click", calcHeartRate, false);
