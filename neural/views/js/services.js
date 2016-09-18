/*global $*/
/*global urlParams*/
var server = "https://neural-carlosgag.c9users.io";
var id = urlParams["id"];

function loadServices() {
    loadMainDB();
    loadEtiquetasQuerer();
    loadEtiquetasSociales();
    loadQueOfrecer();
    loadQueTiene();
    loadTarifarioItau();
}

function loadMainDB() {
    var url = server + "/maindb";
    $.getJSON(url, function(json) {
        var id = urlParams["id"];
        var record = json[0][id];
        $("#Salario").text(record["Salario"]);
        $("#datosPersonales").text(record["Nombre"] + " " + record["Apellido"]);
        changeFeelingImage(record["Sentimiento_Itau"]);
    });
}

function loadEtiquetasQuerer() {
    var url = server + "/etiquetasquerer";
    $.getJSON(url, function(json) {
        var id = urlParams["id"];
        var array = $.map(json[0], function(value, index) {
            return [value];
        });
        var records = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Id_Main"] == id) {
                records.push(array[i]);
            }
        }
        alert(">>" + JSON.stringify(records));
    });
}

function loadEtiquetasSociales() {
    var url = server + "/etiquetassociales";
    $.getJSON(url, function(json) {
        var record = json[0][id];
    });
}

function loadQueOfrecer() {
    var url = server + "/queofrecer";
    $.getJSON(url, function(json) {
        var record = json[0][id];
    });
}

function loadQueTiene() {
    var url = server + "/quetiene";
    $.getJSON(url, function(json) {
        var record = json[0][id];
    });
}

function loadTarifarioItau() {
    var url = server + "/tarifarioitau";
    $.getJSON(url, function(json) {
        var record = json[0][id];
    });
}

function changeFeelingImage(value) {
    var sentimiento = "img/Bueno.png";
    switch (value) {
        case ("Negativo"):
            sentimiento = "img/Malo.png";
            break;
        case ("Positivo"):
            sentimiento = "img/Bueno.png";
            break;
        case ("Neutro"):
            sentimiento = "img/Neutral.png";
            break;
        default:
            sentimiento = "img/Bueno.png";
            break;
    }
    $("#Sentimiento_Itau").attr("src", sentimiento);
}