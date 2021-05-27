var cadastro = document.getElementById('btmcad');
cadastro.onclick = function () {
    document.getElementById("cadastro").style.visibility = "visible";
    document.getElementById("cadastro").style.display = "flex";
    document.getElementById("entrar").style.visibility = "hidden";
    document.getElementById("entrar").style.display = "none";
};
var entrar = document.getElementById('btmlogin');
entrar.onclick = function () {
    document.getElementById("cadastro").style.visibility = "hidden";
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("entrar").style.visibility = "visible";
    document.getElementById("entrar").style.display = "flex";
};
