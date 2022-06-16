const title = "jairo.eng.br";
var i = 1;

function titleCarrossel() {
    setTimeout(function() {
        document.getElementById("welcome-header").innerHTML = title.substring(0, i);
        if(i < title.length) {
            i++;
            titleCarrossel();
        }
    }, 1000);
}
titleCarrossel();