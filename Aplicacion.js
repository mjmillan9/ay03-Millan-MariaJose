$(document).ready(function(){

var fotos = $(".fotos");
var boton1 = $("#boton1");
var boton2 = $("#boton2");
var titulo = $("#titulo");

fotos.mouseenter(function(){
    $(this).fadeTo("fast", 0.2)
});

fotos.mouseleave(function(){
    $(this).fadeTo("fast", 1)
});

boton1.click(function(){
    fotos.hide()
});

boton2.click(function(){
    titulo.append(","+"para conocerlo más")
});

});