
function myFunction1() {
    document.getElementById("price").innerHTML ="Nettobetrag (Preis ohne Mehrwertsteuer) in Euro" 
    document.getElementById("ergebnis-2").innerHTML="Bruttobetrag(Endpreis)";

}
function myFunction2() {
    document.getElementById("price").innerHTML ="Nettobetrag (Preis inklusive Mehrwertsteuer) in Euro" ;
    document.getElementById("ergebnis-2").innerHTML="Nettobetrag"
}
function Berechnen() {
    var numPrice = document.getElementById("numPrice").value;
    let multiplikator = document.getElementById("netto");
    let multiplikator2 = document.getElementById("brutto");
    var x = document.getElementById("prozent-1").checked ? .19 : .07;
    var steuer = ''
    if (multiplikator.checked) {
        steuer = numPrice * x;
        var endsumme = Number(steuer) + Number(numPrice)

        document.getElementById("müll").innerHTML = `<p> ${Number(steuer.toFixed(2))} €</p>`;
    document.getElementById("müll2").innerHTML = `<p> ${Number(endsumme.toFixed(2))} €</p>`;
    } else if (multiplikator2.checked) {
        steuer = numPrice / (1 + x);
        var endsumme = Number(numPrice) - Number(steuer);
        document.getElementById("müll").innerHTML = `<p> ${Number(endsumme.toFixed(2))} €</p>`;
    document.getElementById("müll2").innerHTML = `<p> ${Number(steuer.toFixed(2))} €</p>`;
        
    }
    
    
    
    
}