function getCenaPice(rcm2, cenaPice) {
    return cenaPice / (rcm2 ** 2 * Math.PI);
}
let cena_pice_po_cm2 = getCenaPice(4, 100);
console.log(`Cena pice po kvadratnom centimetru izosi ${cena_pice_po_cm2} dinara`);
