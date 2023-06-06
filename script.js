/**
 * @author Ticiane
 * JS - Ethanol or Gasoline Calculator
 */

var etanol, gasolina;

function calcular () {
    etanol = parseFloat (frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat (frmFlex.txtGasolina.value.replace(",","."));
    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src="img/etanol.png";
    }
    else {
        document.getElementById("status").src="img/gasolina.png";
    }
}

function resetar () {
    document.getElementById("status").src="img/neutro.png";
}