// tady je místo pro náš program


let vysledek = document.querySelector('.vysledekVek');
let celeJmeno = prompt('Jake je vase jmeno a prijmeni?');
let vek = Number(prompt('Jaky je vas vek?'));

vysledek.innerHTML =  "<p>" + celeJmeno + ", vek: " + vek + "</p>";
// funguje

/*
let mzda = document.querySelector('.vysledekMzda');
let hodinovaSazba = Number(prompt('Jaka je vase hodinova sazba'));
let hrubaMzda = hodinovaSazba * 8 * 21;

mzda.innerHTML = "<p>" + "Vase hruba mzda cini: " + hrubaMzda;

// funguje 
*/

let mzda = document.querySelector('.vysledekMzda');
let hodinovaSazba = Number(prompt('Jaka je vase hodinova sazba'));
let pocetHodin = Number(prompt('Kolik hodin denne pracujete?'));
let pocetDni = Number(prompt('Kolik dni v mesici pracujete?'));
let hrubaMzda = hodinovaSazba * pocetHodin * pocetDni;

mzda.innerHTML = "<p>" + "Vase hruba mzda cini: " + hrubaMzda;
