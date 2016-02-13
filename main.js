function calcHeartRate(){
    var user = document.getElementById("age").value;
    var maxRate = 220 - user;
    var minT = maxRate * .5;
    var maxT = maxRate * .85;
    var minTarget = parseInt(minT);
    var maxTarget = parseInt(maxT);
    document.getElementById("result").value = minTarget + " to " + maxTarget + " beats per minute.";
}
document.getElementById("submit").addEventListener("click", calcHeartRate, false);
