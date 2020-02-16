let kolicinaPice;
let jedemMesecno = 7;
let imamGodina = 34;
function getPizzaForLife(godina, mesecno){
    let kolicina = 0;
    for (let index = godina; index < 100; index++) {
        kolicina += 12 * mesecno;
    }
    return kolicina;
}
kolicinaPice = getPizzaForLife(imamGodina,jedemMesecno);
console.log(kolicinaPice);
