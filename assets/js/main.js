
function myFunction1() {
    document.getElementById("price").innerHTML ="Nettobetrag (Preis ohne Mehrwertsteuer) in Euro" 
    document.getElementById("ergebnis-2").innerHTML="Bruttobetrag(Endpreis)";

}
function myFunction2() {
    document.getElementById("price").innerHTML ="Nettobetrag (Preis inklusive Mehrwertsteuer) in Euro" ;
    document.getElementById("ergebnis-2").innerHTML="Nettobetrag"
}
function Berechnen() {
    let numPrice = document.getElementById("numPrice").value;
    let netto = document.getElementById("netto");
    let brutto = document.getElementById("brutto");
    var prozent = document.getElementById("prozent-1").checked ? .19 : .07;
    var steuer = ''
    if (netto.checked) {
        steuer = numPrice * prozent;
        var result = Number(steuer) + Number(numPrice)

        document.getElementById("Ergebnis-h2").innerHTML = ` ${Number(steuer.toFixed(3))} €`;
    document.getElementById("Ergebnis-h3").innerHTML = ` ${Number(result.toFixed(3))} €`;
    } else if (brutto.checked) {
        steuer = numPrice / (1 + prozent);
        var result = Number(numPrice) - Number(steuer);
        document.getElementById("Ergebnis-h2").innerHTML = ` ${Number(result.toFixed(2))} €`;
    document.getElementById("Ergebnis-h3").innerHTML = ` ${Number(steuer.toFixed(2))} €`;
        
    }
      
}